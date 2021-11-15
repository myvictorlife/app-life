import * as fromUserReducer from './user.reducer';
import * as userActions from './user.actions';
import { User } from './user.model';
describe('UserReducer', () => {
    it('should return the default state', () => {
        const { initialState } = fromUserReducer;
        const action = userActions.loadSuccess();
        const state = fromUserReducer.reducer(initialState, action);
        expect(state).toEqual(initialState);
    });

    it('should return new user', () => {
        const { initialState } = fromUserReducer;
        const user = {
            firstName: 'Victor Cesar',
            lastName: 'PB',
            email: 'victorcmggg@gmail.com'
        } as User;
        const action = userActions.setUser({ user });
        const state = fromUserReducer.reducer(initialState, action);
        expect(state).toEqual({ currentUser: user, currentLang: 'en'});
    });

    it('should return portuguese language', () => {
        const { initialState } = fromUserReducer;
        const action = userActions.changeLang({ language: 'pt' });
        const state = fromUserReducer.reducer(initialState, action);
        expect(state).toEqual({ currentUser: null, currentLang: 'pt'});
    });
});