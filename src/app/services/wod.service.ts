import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, Subject, switchMap } from 'rxjs';
import { API_URL } from '../constants/api.constants';
import { Wod } from '../models/wod.model';
import { WodApi } from '../models/wod-api.model';
import { WodAdapter } from '../adapters/wod.adapter';

@Injectable({
  providedIn: 'root',
})
export class WodService {
  private readonly http = inject(HttpClient);
  private readonly searchTerms = new Subject<string>();

  private readonly searchErrorSubject = new BehaviorSubject<string | null>(null);

  readonly searchError$ = this.searchErrorSubject.asObservable();

  readonly searchResults$ = this.searchTerms.pipe(
    switchMap((term) =>
      this.http
        .get<WodApi[]>(`${API_URL}/wods`, {
          params: { 'name:contains': term },
        })
        .pipe(
          map((wods) => WodAdapter.toModelList(wods)),
          catchError((error) => {
            console.error('Error en la búsqueda:', error);
            this.searchErrorSubject.next('Error en la búsqueda');
            return of([]);
          }),
        ),
    ),
  );

  searchWods(term: string): void {
    this.searchErrorSubject.next(null);
    this.searchTerms.next(term);
  }
  getWods(): Observable<Wod[]> {
    return this.http
      .get<WodApi[]>(`${API_URL}/wods`)
      .pipe(map((wods) => WodAdapter.toModelList(wods)));
  }

  createWod(wod: Omit<WodApi, 'id'>): Observable<Wod> {
    return this.http
      .post<WodApi>(`${API_URL}/wods`, wod)
      .pipe(map((apiWod) => WodAdapter.toModel(apiWod)));
  }
}
