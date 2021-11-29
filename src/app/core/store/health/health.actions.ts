/*
 * File: health.actions.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 11:43:54 pm
 * Last Modified: Monday, 29th November 2021 9:40:52 pm
 * Copyright © 2021 My Custom Life
 */

import { Health } from '@life-store/models/health.model';
import { createAction, props } from '@ngrx/store';

export const healthActions = {
  getInfo: createAction('[Health API] Get Health Info'),
  getInfoSuccess: createAction('[Health API] Health Loaded Success', props<{ health: Health }>()),
  getInfoFailed: createAction('[Health API] Healths Failed'),
};
