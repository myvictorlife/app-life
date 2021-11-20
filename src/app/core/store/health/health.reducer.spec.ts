/*
 * File: health.reducer.spec.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 7:56:28 pm
 * Last Modified: Saturday, 20th November 2021 8:00:24 pm
 * Copyright © 2021 My Custom Life
 */

import * as fromUserReducer from './health.reducers';
import { healthActions } from './health.actions';
import { Health } from '../models/health.model';

describe('UserReducer', () => {
  it('should return new user', () => {
    const { initialState } = fromUserReducer;
    const health = {
      appName: 'App Test',
      version: '0.0.2',
    } as Health;
    const action = healthActions.getInfoSuccess({ health });
    const state = fromUserReducer.reducer(initialState, action);
    expect(state).toEqual({ appName: 'App Test', version: '0.0.2' });
  });
});
