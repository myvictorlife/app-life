/*
 * File: health.effects.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 9:16:27 am
 * Last Modified: Tuesday, 30th November 2021 7:37:01 pm
 * Copyright © 2021 My Custom Life
 */

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HealthService } from '@life-service/health/health.service';
import { healthActions } from '@life-store/health/health.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class HealthEffects {
  healthInfo$ = createEffect(() => (
    /* eslint-disable-next-line */
    this.actions$.pipe(
      ofType(healthActions.getInfo),
      exhaustMap(() => this.healthService.getInfo().pipe(
        map((health) => healthActions.getInfoSuccess({ health })),
        catchError(() => of(healthActions.getInfoFailed()))
      ))
    ))
  );

  constructor(private actions$: Actions, private healthService: HealthService) {}
}
