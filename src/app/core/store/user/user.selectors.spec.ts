
import * as fromUserSelectors from './user.selectors';
import { User } from './user.model';

import { State } from '@life-store/index';
describe('UserSelectors', () => {
    const initialState: State = { 
        user: {
            currentUser: {
                firstName: 'Victor Cesar',
                lastName: 'PB',
                email: 'victorcmggg@gmail.com'
            } as User,
            currentLang: 'en'
        }
    };

    it('should select the State', () => {
        expect(fromUserSelectors.selectAppState(initialState)).toEqual(initialState);
    });

    describe('Current User', () => {
        it('should select the current user - v1', () => {
            expect(fromUserSelectors.selectUser.projector(initialState)).toEqual(initialState.user.currentUser);
        });
    
        it('should select the current user - v2', () => {
            const initialState: State = { 
                user: {
                    currentUser: undefined,
                    currentLang: 'en'
                }
            };
            expect(fromUserSelectors.selectUser.projector(initialState)).toEqual(undefined);
            expect(fromUserSelectors.selectUser.projector({ user: undefined })).toEqual(undefined);
            expect(fromUserSelectors.selectUser.projector(undefined)).toEqual(undefined);
        });
    })

    describe('Current Language', () => {
        it('should select the current language - v1', () => {
            expect(fromUserSelectors.selectLanguage.projector(initialState)).toEqual('en');
        });

        it('should select the current language - v2', () => {
            expect(fromUserSelectors.selectLanguage.projector(undefined)).toEqual(undefined);
            expect(fromUserSelectors.selectLanguage.projector({ user: undefined })).toEqual(undefined);
        });
    })

});