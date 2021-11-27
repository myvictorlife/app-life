/*
 * File: auth.selectors.spec.ts
 * Project: LIFE
 * Created: Friday, 26th November 2021 8:48:55 pm
 * Last Modified: Friday, 26th November 2021 9:13:10 pm
 * Copyright © 2021 My Custom Life
 */

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducers';
// Auth
export const selectAuthState = createFeatureSelector<fromAuth.State>(fromAuth.feature);

export const selectAuth = createSelector(
  selectAuthState,
  (state: fromAuth.State) => state.credential,
);
