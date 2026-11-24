import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { WodList } from './components/wod-list/wod-list.component';
import { WodFilters, WodFilter } from './components/wod-filters/wod-filters.component';
import type { Wod } from './models/wod.model';
import { WodService } from './services/wod.service';

@Component({
  selector: 'app-root',
  imports: [WodList, WodFilters, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App implements OnInit {
  public appName = 'Wod-Finder';

  wods: Wod[] = [];
  filteredWods: Wod[] = [];
  selectedWod?: Wod;
  isLoading = false;
  selectedCategory: WodFilter['category'] = 'Todas';
  lastFilters?: WodFilter;

  errorMessage = '';
  private cdr = inject(ChangeDetectorRef);
  constructor(private wodService: WodService) {}

  ngOnInit(): void {
    this.loadWods();

    this.wodService.searchResults$.subscribe({
      next: (wods) => {
        this.filteredWods = wods.filter(
          (wod) => this.selectedCategory === 'Todas' || wod.category === this.selectedCategory,
        );
        this.isLoading = false;
        this.errorMessage = '';
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error al buscar WOD:', error);
        this.errorMessage = 'No se han podido buscar los entrenamientos.';
        this.isLoading = false;
        this.cdr.markForCheck();
      },
    });

    this.wodService.searchError$.subscribe((error) => {
      if (error) {
        this.errorMessage = error;
        this.isLoading = false;
      } else {
        this.errorMessage = '';
      }
      this.cdr.markForCheck();
    });
  }

  loadWods(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.wodService.getWods().subscribe({
      next: (wods) => {
        this.wods = wods;
        this.filteredWods = [...wods];
        this.isLoading = false;

        this.cdr.markForCheck();
      },
      error: (error) => {
        this.cdr.markForCheck();
        console.error('Error al cargar los WOD:', error);
        this.errorMessage = 'No se han podido cargar los WOD.';
        this.isLoading = false;
      },
    });
  }

  onFiltersChanged(filters: WodFilter): void {
    this.lastFilters = filters;
    this.selectedCategory = filters.category;
    this.isLoading = true;
    this.errorMessage = '';

    this.wodService.searchWods(filters.search.trim());
  }

  onWodSelected(wod: Wod): void {
    this.selectedWod = wod;
    console.log('WOD seleccionado:', wod);
  }

  retryLastQuery(): void {
    if (this.lastFilters) {
      this.onFiltersChanged(this.lastFilters);
    } else {
      this.loadWods();
    }
  }
}
