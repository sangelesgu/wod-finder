import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { WodList } from './components/wod-list/wod-list.component';
import { WodFilters, WodFilter } from './components/wod-filters/wod-filters.component';
import { WODS_MOCK } from './models/wod.mock';
import type { Wod } from './models/wod.model';

@Component({
  selector: 'app-root',
  imports: [WodList, WodFilters, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  public appName = 'Wod-Finder';

  wods: Wod[] = WODS_MOCK;

  filteredWods: Wod[] = [...this.wods];

  selectedWod?: Wod;

  onFiltersChanged(filters: WodFilter): void {
    this.filteredWods = this.wods.filter((wod) => {
      const matchesSearch = wod.name.toLowerCase().includes(filters.search.toLowerCase());

      const matchesCategory = filters.category === 'Todas' || wod.category === filters.category;

      return matchesSearch && matchesCategory;
    });
  }

  onWodSelected(wod: Wod): void {
    this.selectedWod = wod;
    console.log('WOD seleccionado:', wod);
  }
}
