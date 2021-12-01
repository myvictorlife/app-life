/*
 * File: loading.reducerrs.ts
 * Project: LIFE
 * Created: Tuesday, 30th November 2021 4:02:51 pm
 * Last Modified: Wednesday, 1st December 2021 8:02:39 am
 * Copyright © 2021 My Custom Life
 */

import { LoadingState } from '@life-store/models/loading.model';
import { createReducer, on } from '@ngrx/store';
import { loadingActions } from '../actions/loading.actions';

export const feature = 'loading';

export interface State extends LoadingState {
}

export const initialState: State = {
    active: 0,
    actionsInProgress: []
};

export const reducer = createReducer(
    initialState,
    on(
        loadingActions.showLoading,
        (state: State, { payload }): State => {
            const actionsInProgress = state.actionsInProgress ?? [];
            const isActionAlreadyInProgress = actionsInProgress.filter(
                (currentAction: any) => currentAction === payload.type).length;

            // If the action in already in progress and is registered
            // we don't modify the state
            if (isActionAlreadyInProgress) {
                return state;
            }

            // Adding the action type in our actionsInProgress array
            const newActionsInProgress = [
                ...actionsInProgress,
                payload.type
            ];

            return {
                ...state,
                actionsInProgress: newActionsInProgress,
                active: newActionsInProgress.length
            };
        }
    ),
    on(
        loadingActions.hideLoading,
        (state: State, { payload }): State => {

            let newActionsInProgress = state.actionsInProgress ?? [];
            for (const actionName of payload.actions ) {
                // We remove trigger action from actionsInProgress array
                newActionsInProgress = newActionsInProgress.filter(
                    (currentAction: any) =>
                        currentAction !== actionName
                    );
            }

            return {
                ...state,
                actionsInProgress: newActionsInProgress,
                active: state.active > 0 ? newActionsInProgress.length : 0
            };
        }
    ),
);

export const isLoadingSpinnerActive = (state: State) => state.active;
