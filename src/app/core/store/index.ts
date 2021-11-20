import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromUser from './user/user.reducer';
import * as fromHealth from './health/health.reducers';
import * as userSelector from '@life-store/user/user.selectors';

export interface State {
  health: fromHealth.State;
  user: fromUser.State;
}
export const reducers: ActionReducerMap<State> = {
  health: fromHealth.reducer,
  user: fromUser.reducer,
};
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const userSelectors = userSelector;
