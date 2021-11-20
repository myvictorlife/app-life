/*
 * File: health.effects.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 9:16:27 am
 * Last Modified: Saturday, 20th November 2021 7:03:43 pm
 * Copyright © 2021 My Custom Life
 */

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HealthService } from '@life-service/health/health.service';
import { healthActions } from '@life-store/health/health.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class HealthEffects {
  /* eslint-disable-next-line */
  healthInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(healthActions.getInfo),
      mergeMap(() =>
        this.healthService.getInfo().pipe(
          map((health) => healthActions.getInfoSuccess({ health })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private healthService: HealthService) {}
}
