/*
 * File: user.reducer.spec.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 11:43:54 pm
 * Last Modified: Thursday, 25th November 2021 12:10:47 am
 * Copyright © 2021 My Custom Life
 */

import * as fromUserReducer from './user.reducer';
import { userActions } from './user.actions';
import { User } from '../models/user.model';

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
      email: 'victorcmggg@gmail.com',
    } as User;
    const action = userActions.setUser({ user });
    const state = fromUserReducer.reducer(initialState, action);
    expect(state).toEqual({ currentUser: user, currentLang: 'en' });
  });

  it('should return portuguese language', () => {
    const { initialState } = fromUserReducer;
    const action = userActions.changeLang({ language: 'pt' });
    const state = fromUserReducer.reducer(initialState, action);
    expect(state).toEqual({ currentUser: null, currentLang: 'pt' });
  });

  it('should user created sucessfully', () => {
    const { initialState } = fromUserReducer;
    const user: User = {
      firstName: '',
      lastName: '',
      email: 'unit-test@life.com',
      password: '',
    };
    const action = userActions.userCreatedSucessfully({ user });
    const state = fromUserReducer.reducer(initialState, action);
    expect(state.currentUser).toEqual(user);
  });
});
