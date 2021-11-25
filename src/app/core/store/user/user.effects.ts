/*
 * File: user.effects.ts
 * Project: LIFE
 * Created: Tuesday, 23rd November 2021 9:28:31 pm
 * Last Modified: Wednesday, 24th November 2021 5:57:15 pm
 * Copyright © 2021 My Custom Life
 */

import { UserService } from '@life-service/user/user.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { userActions } from '@life-store/user/user.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserEffects {
  createNewUser$ = createEffect(() =>
    /* eslint-disable-next-line */
    this.actions$.pipe(
      ofType(userActions.createUser),
      mergeMap((action) =>
        this.userService.createNewUser(action.user).pipe(
          map((user) => userActions.userCreatedSucessfully({ user })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
