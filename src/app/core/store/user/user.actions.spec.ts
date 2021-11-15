import { changeLang, load, loadSuccess, setUser } from './user.actions';
import { User } from './user.model';


describe('UserActions', () => {
    it('should load an action', () => {
        const action = load();
        expect(action).toEqual({ type: '[USER] Load' });
    });
    it('should load an action', () => {
        const user = { firstName: 'Victor Cesar', lastName: 'PB', email: 'life@my-custom-life.com'} as User;
        const action = setUser({ user });
        expect(action).toEqual({ type: '[USER] Set User', user });
    });

    it('should load an action', () => {
        const action = loadSuccess();
        expect(action).toEqual({ type: '[USER] Load Success' });
    });

    it('should load an action', () => {
        const action = changeLang({ language: 'en' });
        expect(action).toEqual({ type: '[USER] Change Language', language: 'en' });
    });
});
