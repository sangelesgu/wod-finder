import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import type { Wod } from '../../models/wod.model';
import { filter, take } from 'rxjs';

import { wodExistsValidator } from '../../validators/wod-exists.validator';

export interface WodFilter {
  search: string;
  category: Wod['category'] | 'Todas';
}

@Component({
  selector: 'app-wod-filters',
  imports: [ReactiveFormsModule],
  templateUrl: './wod-filters.component.html',
  styleUrl: './wod-filters.component.scss',
})
export class WodFilters {
  @Output() filtersChanged = new EventEmitter<WodFilter>();

  searchHistory: string[] = this.loadSearchHistory();

  private readonly historyKey = 'wod-finder-search-history';

  private loadSearchHistory(): string[] {
    try {
      return JSON.parse(localStorage.getItem('wod-finder-search-history') ?? '[]');
    } catch (error) {
      console.error('Error al recuperar el historial:', error);
      return [];
    }
  }

  private saveSearchHistory(term: string): void {
    if (!term) return;

    const lastSearch = this.searchHistory[0];
    if (lastSearch === term) return;

    this.searchHistory = [term, ...this.searchHistory].slice(0, 5);

    try {
      localStorage.setItem(this.historyKey, JSON.stringify(this.searchHistory));
    } catch (error) {
      console.error('Error al guardar el historial:', error);
    }
  }

  filtersForm = new FormGroup({
    search: new FormControl('', {
      nonNullable: true,
      validators: [Validators.minLength(3)],
      asyncValidators: [wodExistsValidator()],
    }),
    category: new FormControl<WodFilter['category']>('Todas', {
      nonNullable: true,
    }),
  });

  applyFilters(): void {
    if (this.filtersForm.invalid || this.filtersForm.pending) {
      return;
    }

    const filters = this.filtersForm.getRawValue();

    this.saveSearchHistory(filters.search.trim());

    this.filtersChanged.emit(filters);
  }

  selectHistory(term: string): void {
    const searchControl = this.filtersForm.controls.search;

    searchControl.statusChanges
      .pipe(
        filter((status) => status === 'VALID'),
        take(1),
      )
      .subscribe(() => {
        this.filtersChanged.emit(this.filtersForm.getRawValue());
      });

    searchControl.setValue(term);
  }

  resetFilters(): void {
    this.filtersForm.reset({
      search: '',
      category: 'Todas',
    });

    this.applyFilters();
  }
}
