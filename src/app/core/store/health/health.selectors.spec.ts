/*
 * File: health.selectors.spec.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 8:01:48 pm
 * Last Modified: Saturday, 20th November 2021 8:07:43 pm
 * Copyright © 2021 My Custom Life
 */

import * as fromHealthSelectors from './health.selectors';
import { Health } from '../models/health.model';
import * as fromHealth from './health.reducers';

describe('UserSelectors', () => {
  const initialState: fromHealth.State = {
    appName: 'App Test',
    version: '0.0.2',
  } as Health;

  it('should select heath state', () => {
    expect(fromHealthSelectors.selectHealthState.projector(initialState)).toEqual(initialState);
  });

  it('should select app name', () => {
    expect(fromHealthSelectors.selectAppName.projector(initialState)).toEqual(initialState.appName);
  });

  it('should select app version', () => {
    expect(fromHealthSelectors.selectAppVersion.projector(initialState)).toEqual(
      initialState.version,
    );
  });
});
