/*
 * File: health.reducers.ts
 * Project: LIFE
 * Created: Friday, 19th November 2021 11:47:05 pm
 * Last Modified: Saturday, 20th November 2021 8:00:08 pm
 * Copyright © 2020 My Custom Life
 */

import { createReducer, on } from '@ngrx/store';
import { Health } from '@life-store/models/health.model';
import { healthActions } from './health.actions';

export const feature = 'health';

export interface State extends Health {}

export const initialState: State = {
  appName: 'LIFE',
  version: '0.0.1',
};

export const reducer = createReducer(
  initialState,
  on(
    healthActions.getInfoSuccess,
    (state: State, { health }): State => ({
      ...state,
      appName: health.appName,
      version: health.version,
    }),
  ),
);
