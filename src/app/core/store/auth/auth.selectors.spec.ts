/*
 * File: auth.selectors.spec.ts
 * Project: LIFE
 * Created: Wednesday, 1st December 2021 8:08:09 pm
 * Last Modified: Wednesday, 1st December 2021 8:32:14 pm
 * Copyright © 2021 My Custom Life
 */

import * as fromAuth from './auth.reducers';
import * as fromAuthSelectors from './auth.selectors';

describe('AuthSelectors', () => {
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
    const initialState: any = {
        credential: {
            user,
            operationType: 'signIn',
            providerId: ''
        }
    };

    it('should select the default state', () => {
        expect(fromAuthSelectors.selectAuthState.projector(initialState))
        .toEqual(initialState)
    });

    it('should select auth', () => {
        expect(fromAuthSelectors.selectAuth.projector(initialState))
        .toEqual(initialState.credential)
    });
});
