/*
 * File: auth.reducers.ts
 * Project: LIFE
 * Created: Friday, 26th November 2021 8:32:10 pm
 * Last Modified: Sunday, 28th November 2021 12:22:30 pm
 * Copyright © 2021 My Custom Life
 */

export const feature = 'auth';
import * as auth from '@angular/fire/auth';
import { createReducer, on } from '@ngrx/store';
import { authActions } from './auth.actions';

export interface State {
  credential: auth.UserCredential | null;
  error: null;
}

export const initialState: State = {
  credential: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(
    authActions.signInWithEmailAndPasswordSuccess,
    (state: State, { user }): State => ({
      ...state,
      credential: user,
    }),
  ),
  on(
    authActions.signInWithEmailAndPasswordFailed,
    (state: State, { error }): State => ({
      ...state, error
    }),
  ),
);
