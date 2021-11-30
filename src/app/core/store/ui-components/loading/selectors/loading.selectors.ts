/*
 * File: loading.selectors.ts
 * Project: LIFE
 * Created: Tuesday, 30th November 2021 5:41:44 pm
 * Last Modified: Tuesday, 30th November 2021 7:45:02 pm
 * Copyright © 2021 My Custom Life
 */

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLoading from '../reducers/loading.reducers';

export const selectLoadingState =
    createFeatureSelector<fromLoading.State>(fromLoading.feature);

export const selectIsLoadingSpinnerActive = createSelector(
    selectLoadingState,
    fromLoading.isLoadingSpinnerActive
);
