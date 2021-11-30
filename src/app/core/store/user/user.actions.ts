/*
 * File: user.actions.ts
 * Project: LIFE
 * Created: Tuesday, 16th November 2021 11:12:43 pm
 * Last Modified: Tuesday, 30th November 2021 7:34:33 am
 * Copyright © 2021 My Custom Life
 */

import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const userActions = {
  load: createAction('[USER] Load'),

  setUser: createAction('[USER] Set User', props<{ user: User }>()),

  loadSuccess: createAction('[USER] Load Success'),

  changeLang: createAction('[USER] Change Language', props<{ language: string }>()),

  createUser: createAction('[USER] Create New User', props<{ user: User }>()),
  userCreatedSucessfully: createAction('[USER] User Created Sucessfully', props<{ user: User }>()),
  userCreatedFailed: createAction('[USER] Error trying to create User'),
};
