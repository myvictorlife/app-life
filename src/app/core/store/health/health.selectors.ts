/*
 * File: health.selectors.ts
 * Project: LIFE
 * Created: Friday, 19th November 2021 11:42:21 pm
 * Last Modified: Friday, 26th November 2021 8:50:42 pm
 * Copyright © 2021 My Custom Life
 */

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHealth from './health.reducers';

// Health Info
export const selectHealthState = createFeatureSelector<fromHealth.State>(fromHealth.feature);

export const selectHealthInfo = createSelector(
  selectHealthState,
  (state: fromHealth.State) => state,
);

export const selectAppName = createSelector(
  selectHealthState,
  (state: fromHealth.State) => state.appName,
);

export const selectAppVersion = createSelector(
  selectHealthState,
  (state: fromHealth.State) => state.version,
);
