

import { User } from './user.model';
import { LANG } from 'config/lang';
import { createReducer, on } from '@ngrx/store';
import { userActions } from './user.actions';
export const feature = 'user';

export interface State {
    currentUser: User | null;
    currentLang: string;
}

export const initialState: State = {
    currentUser: null,
    currentLang: LANG.en
};

export const reducer = createReducer(
    initialState,
    on(userActions.loadSuccess, (state: State): State  => ({ ...state })),
    on(userActions.setUser, (state: State, { user }): State  => ({ ...state, currentUser: user })),
    on(userActions.changeLang, (state: State, { language }): State => ({
        ...state,
        currentLang: language
    }))
);
