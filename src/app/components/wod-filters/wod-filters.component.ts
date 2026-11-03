import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import type { Wod } from '../../models/wod.model';

export interface WodFilter {
  search: string;
  category: Wod['category'] | 'Todas';
}

@Component({
  selector: 'app-wod-filters',
  imports: [FormsModule],
  templateUrl: './wod-filters.component.html',
  styleUrl: './wod-filters.component.scss',
})
export class WodFilters {
  search = '';
  category: WodFilter['category'] = 'Todas';

  @Output() filtersChanged = new EventEmitter<WodFilter>();

  applyFilters(): void {
    this.filtersChanged.emit({
      search: this.search.trim(),
      category: this.category,
    });
  }

  resetFilters(form: NgForm): void {
    form.resetForm({
      search: '',
      category: 'Todas',
    });

    this.applyFilters();
  }
}
