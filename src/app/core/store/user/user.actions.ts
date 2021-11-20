/*
 * File: user.actions.ts
 * Project: LIFE
 * Created: Tuesday, 16th November 2021 11:12:43 pm
 * Last Modified: Saturday, 20th November 2021 7:01:48 pm
 * Copyright © 2021 My Custom Life
 */

import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const userActions = {
  load: createAction('[USER] Load'),

  setUser: createAction('[USER] Set User', props<{ user: User }>()),

  loadSuccess: createAction('[USER] Load Success'),

  changeLang: createAction('[USER] Change Language', props<{ language: string }>()),
};
