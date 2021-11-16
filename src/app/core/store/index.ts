import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromUser from './user/user.reducer';
import * as userSelector from '@life-store/user/user.selectors';

export interface State {
    user: fromUser.State;
}
export const reducers: ActionReducerMap<State> = {
    user: fromUser.reducer
};
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const userSelectors = userSelector;