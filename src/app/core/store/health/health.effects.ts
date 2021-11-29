/*
 * File: health.effects.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 9:16:27 am
 * Last Modified: Monday, 29th November 2021 11:19:44 pm
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
    this.actions$.pipe(
      ofType(healthActions.getInfo),
      exhaustMap(() => this.healthService.getInfo()),
      map((health) => healthActions.getInfoSuccess({ health })),
      catchError(() => of(healthActions.getInfoFailed()))
    )),
  );

  constructor(private actions$: Actions, private healthService: HealthService) {}
}
