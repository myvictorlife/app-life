/*
 * File: auth.effects.ts
 * Project: LIFE
 * Created: Friday, 26th November 2021 8:19:59 pm
 * Last Modified: Friday, 26th November 2021 9:50:50 pm
 * Copyright © 2021 My Custom Life
 */

import { Injectable } from '@angular/core';
import { AuthService } from '@life-service/auth/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { authActions } from '@life-store/auth/auth.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
@Injectable()
export class AuthEffects {
  authSignInWithEmailAndPassword$ = createEffect(() =>
    /* eslint-disable-next-line */
    this.actions$.pipe(
      ofType(authActions.signInWithEmailAndPassword),
      mergeMap((action) =>
        this.authService.doLogin(action.email, action.password).pipe(
          map((user) => authActions.signInWithEmailAndPasswordSuccess({ user })),
          catchError(async (error) => authActions.signInWithEmailAndPasswordFailed({ error })),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
