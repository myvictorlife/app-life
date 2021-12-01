/*
 * File: auth.actions.spec.ts
 * Project: LIFE
 * Created: Wednesday, 1st December 2021 7:32:33 pm
 * Last Modified: Wednesday, 1st December 2021 9:19:02 pm
 * Copyright © 2021 My Custom Life
 */

import { authActions} from './auth.actions';
describe('AuthActions', () => {
    it('should sign in with email and password', () => {
       const email = 'test@my-custom-life.com';
       const  password = '112233';

        const action = authActions
            .signInWithEmailAndPassword({ email, password});
        expect(action).toEqual({
            type: '[Auth] Sign In With Email And Password',
            email, password
        });
    });

    it('should sign in with email and password success', () => {
         const action = authActions
            .signInWithEmailAndPasswordSuccess({
                 user: {} as any
            });
        expect(action).toEqual({
             type: '[Auth] Sign In With Email And Password Success',
             user: {} as any
        });
    });

    it('should sign in with email and password failed', () => {
         const action = authActions
            .signInWithEmailAndPasswordFailed({
                error: {}
            });

        expect(action).toEqual({
            type: '[Auth] Sign In With Email And Password Failed',
            error: {}
        });
     });
});
