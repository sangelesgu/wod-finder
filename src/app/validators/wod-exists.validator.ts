import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { inject } from '@angular/core';
import { catchError, map, of, timer, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/api.constants';
import { WodApi } from '../models/wod-api.model';

export function wodExistsValidator(): AsyncValidatorFn {
  const http = inject(HttpClient);

  return (control: AbstractControl) => {
    const term = String(control.value ?? '').trim();

    if (!term || term.length < 3) {
      return of(null);
    }

    return timer(400).pipe(
      switchMap(() =>
        http.get<WodApi[]>(`${API_URL}/wods`, {
          params: { 'name:contains': term },
        }),
      ),
      map((wods) => (wods.length > 0 ? null : { wodNotFound: true })),
      catchError(() => of(null)),
    );
  };
}
