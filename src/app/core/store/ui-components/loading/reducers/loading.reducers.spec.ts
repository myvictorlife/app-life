/*
 * File: loading.reducers.spec.ts
 * Project: LIFE
 * Created: Tuesday, 30th November 2021 8:04:51 pm
 * Last Modified: Wednesday, 1st December 2021 8:05:12 am
 * Copyright © 2021 My Custom Life
 */

import { loadingActions } from '../actions/loading.actions';
import * as fromLoadingReducer from './loading.reducers';

describe('LoadingReducer', () => {
    
    describe('showLoading', () => {
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

        it('should return the same state', () => {
            const initialState = { active: 1, actionsInProgress: ['[TEST] Test Action'] };
            const action = loadingActions.showLoading({
                payload: {
                    type: '[TEST] Test Action'
                }
            });
            const state = fromLoadingReducer.reducer(initialState, action);
            expect(state).toEqual({ active: 1, actionsInProgress: ['[TEST] Test Action'] });
        });

        it('should return the same state', () => {
            const initialState = { active: 1, actionsInProgress: undefined };
            const action = loadingActions.showLoading({
                payload: {
                    type: '[TEST] Test Action'
                }
            });
            const state = fromLoadingReducer.reducer(initialState, action);
            expect(state).toEqual({ active: 0, actionsInProgress: [] });
        });
    });

    describe('hideLoading', () => {
        it('should loading be inactive - v1', () => {
            const initialState = { active: 1, actionsInProgress: ['[TEST] Test Action'] };
            const action = loadingActions.hideLoading({
                payload: {
                    actions: ['[TEST] Test Action']
                }
            });
            const state = fromLoadingReducer.reducer(initialState, action);
            expect(state).toEqual({ active: 0, actionsInProgress: [] });
        });
        
        it('should return the same state for hideLoading', () => {
            const initialState = {
                active: 1,
                actionsInProgress: ['[TEST] Test Action', '[TEST] Test Action 2']
            };
            const action = loadingActions.hideLoading({
                payload: {
                    actions: ['[TEST] Test Action']
                }
            });
            const state = fromLoadingReducer.reducer(initialState, action);
            expect(state).toEqual({ active: 1, actionsInProgress: ['[TEST] Test Action 2'] });
        });
    
        it('should return the same state for hideLoading empty actions', () => {
            const initialState = { active: 0, actionsInProgress: undefined };
            const action = loadingActions.hideLoading({
                payload: {
                    actions: ['[TEST] Test Action']
                }
            });
            const state = fromLoadingReducer.reducer(initialState, action);
            expect(state).toEqual({ active: 0, actionsInProgress: [] });
        });
    
        it('should return the same state for hideLoading empty actions - null', () => {
            const initialState = { active: 0, actionsInProgress: null };
            const action = loadingActions.hideLoading({
                payload: {
                    actions: ['[TEST] Test Action']
                }
            });
            const state = fromLoadingReducer.reducer(initialState, action);
            expect(state).toEqual({ active: 0, actionsInProgress: [] });
        });
    });
});
