/*
 * File: auth.actions.ts
 * Project: LIFE
 * Created: Friday, 26th November 2021 8:17:02 pm
 * Last Modified: Friday, 26th November 2021 9:38:48 pm
 * Copyright © 2021 My Custom Life
 */

import { createAction, props } from '@ngrx/store';
import * as auth from '@angular/fire/auth';

export const authActions = {
  signInWithEmailAndPassword: createAction(
    '[Auth] Sign In With Email And Password',
    props<{ email: string; password: string }>(),
  ),
  signInWithEmailAndPasswordSuccess: createAction(
    '[Auth] Sign In With Email And Password Success',
    props<{ user: auth.UserCredential | null }>(),
  ),
  signInWithEmailAndPasswordFailed: createAction(
    '[Auth] Sign In With Email And Password Failed',
    props<{ error: any }>(),
  ),
};
