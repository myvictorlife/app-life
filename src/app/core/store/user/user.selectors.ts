import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

// USER
export const selectUserState = createFeatureSelector<fromUser.State>(fromUser.feature);

export const selectUser = createSelector(
  selectUserState,
  (state: fromUser.State) => state?.currentUser,
);
export const selectLanguage = createSelector(
  selectUserState,
  (state: fromUser.State) => state?.currentLang,
);
