import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromUser from './user/user.reducer';

export interface State {
    user: fromUser.State;
}
export const reducers: ActionReducerMap<State> = {
    user: fromUser.reducer
};
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// USER
export const selectFeature = (state: State) => state.user;
export const selectUser = createSelector(
    selectFeature,
    (state: fromUser.State) => state?.currentUser
);
export const selectLanguage = createSelector(
    selectFeature,
    (state: fromUser.State) => state?.currentLang
);
