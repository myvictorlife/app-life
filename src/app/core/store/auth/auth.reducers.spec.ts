/*
 * File: auth.reducers.spec.ts
 * Project: LIFE
 * Created: Wednesday, 1st December 2021 8:38:13 pm
 * Last Modified: Wednesday, 1st December 2021 9:19:12 pm
 * Copyright © 2021 My Custom Life
 */

import * as fromAuthReducer from './auth.reducers';
import { authActions } from './auth.actions';
describe('AuthReducers', () => {

    const user: any = {
        uid: 'C6hK3f4PClMZxHwb2W4SI99Ut8r1',
        email: 'victorcmggg@gmail.com',
        emailVerified: false,
        displayName: ' ',
        isAnonymous: false,
        providerData: [
            {
                providerId: 'password',
                uid: 'life@my-custom-life.com',
                displayName: ' ',
                email: 'ife@my-custom-lifecom',
                phoneNumber: null,
                photoURL: null
            }
        ]
    };
    it('should return new credential', () => {
        const { initialState } = fromAuthReducer;
        const action = authActions.signInWithEmailAndPasswordSuccess({
            user
        });
        const state = fromAuthReducer.reducer(initialState, action);
        expect(state.credential).toEqual(user);
    });

    it('should return error', () => {
        const { initialState } = fromAuthReducer;
        const action = authActions.signInWithEmailAndPasswordFailed({
            error: { message: 'Unit Test' }
        });
        const state = fromAuthReducer.reducer(initialState, action);
        expect(state.error).toEqual({ message: 'Unit Test' });
    });
});
