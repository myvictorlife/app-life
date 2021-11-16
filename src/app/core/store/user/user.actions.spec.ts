import { userActions } from './user.actions';
import { User } from './user.model';


describe('UserActions', () => {
    it('should load an action', () => {
        const action = userActions.load();
        expect(action).toEqual({ type: '[USER] Load' });
    });
    it('should load an action', () => {
        const user = { firstName: 'Victor Cesar', lastName: 'PB', email: 'life@my-custom-life.com'} as User;
        const action = userActions.setUser({ user });
        expect(action).toEqual({ type: '[USER] Set User', user });
    });

    it('should load an action', () => {
        const action = userActions.loadSuccess();
        expect(action).toEqual({ type: '[USER] Load Success' });
    });

    it('should load an action', () => {
        const action = userActions.changeLang({ language: 'en' });
        expect(action).toEqual({ type: '[USER] Change Language', language: 'en' });
    });
});
