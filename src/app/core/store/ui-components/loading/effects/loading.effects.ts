/*
 * File: loading.effects.ts
 * Project: LIFE
 * Created: Tuesday, 30th November 2021 4:11:02 pm
 * Last Modified: Tuesday, 30th November 2021 7:39:33 pm
 * Copyright © 2021 My Custom Life
 */

import { Injectable } from '@angular/core';
import { authActions } from '@life-store/auth/auth.actions';
import { userActions } from '@life-store/user/user.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { loadingActions } from '../actions/loading.actions';

@Injectable()
export class LoadingEffects {

    listOfActions: any[] = [];

    showLoading$ = createEffect(() => (
        /* eslint-disable-next-line */
        this.actions$.pipe(
            ofType(
                userActions.createUser,
                authActions.signInWithEmailAndPassword
            ),
            map((action) => {
                this.listOfActions.push(action.type);
                return loadingActions.showLoading({
                    payload: {
                        type: action.type
                    }
                });
            })
        )
    ));

    hideLoading$ = createEffect(() => (
        /* eslint-disable-next-line */
        this.actions$.pipe(
            ofType(
                userActions.userCreatedSucessfully,
                userActions.userCreatedFailed,
                authActions.signInWithEmailAndPasswordSuccess,
                authActions.signInWithEmailAndPasswordFailed
            ),
            map((action) => {
                const actions = this.listOfActions;
                this.listOfActions = [];
                return loadingActions.hideLoading({
                    payload: {
                        actions
                    }
                });
            })
        )
    ));

    constructor(private actions$: Actions) {}
}
