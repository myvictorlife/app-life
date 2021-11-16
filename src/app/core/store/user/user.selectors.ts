import {
    createSelector
} from '@ngrx/store';
import { State } from '@life-store/index';

// USER
export const selectAppState = (state: State) => state;

export const selectUser = createSelector(
    selectAppState,
    (state: State) => state?.user?.currentUser
);
export const selectLanguage = createSelector(
    selectAppState,
    (state: State) => state?.user?.currentLang
);
