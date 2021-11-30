/*
 * File: loading.reducers.spec.ts
 * Project: LIFE
 * Created: Tuesday, 30th November 2021 8:04:51 pm
 * Last Modified: Tuesday, 30th November 2021 8:17:01 pm
 * Copyright © 2021 My Custom Life
 */

import { loadingActions } from '../actions/loading.actions';
import * as fromLoadingReducer from './loading.reducers';

describe('LoadingReducer', () => {
    it('should loading be active - v1', () => {
        const { initialState } = fromLoadingReducer;
        const action = loadingActions.showLoading({
            payload: {
                type: '[TEST] Test Action'
            }
        });
        const state = fromLoadingReducer.reducer(initialState, action);
        expect(state).toEqual({ active: 1, actionsInProgress: ['[TEST] Test Action'] });
      });
    it('should loading be active - v2', () => {
        const { initialState } = fromLoadingReducer;
        const action = loadingActions.showLoading({
            payload: {
                type: '[TEST] Test Action'
            }
        });
        const state = fromLoadingReducer.reducer(initialState, action);
        const action2 = loadingActions.showLoading({
            payload: {
                type: '[TEST] Test Action'
            }
        });
        const state2 = fromLoadingReducer.reducer(initialState, action2);
        expect(state).toEqual({ active: 1, actionsInProgress: ['[TEST] Test Action'] });
    });

    it('should loading be inactive - v1', () => {
        const { initialState } = fromLoadingReducer;
        console.log('initialState:: ', initialState);
        const action = loadingActions.hideLoading({
            payload: {
                actions: ['[TEST] Test Action']
            }
        });
        const state = fromLoadingReducer.reducer(initialState, action);
        expect(state).toEqual({ active: 0, actionsInProgress: [] });
    });
});
