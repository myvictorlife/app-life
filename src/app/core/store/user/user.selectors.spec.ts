/*
 * File: user.selectors.spec.ts
 * Project: LIFE
 * Created: Tuesday, 16th November 2021 11:12:43 pm
 * Last Modified: Saturday, 20th November 2021 7:06:36 pm
 * Copyright © 2021 My Custom Life
 */

import * as fromUserSelectors from './user.selectors';
import { User } from '../models/user.model';
import * as fromUser from './user.reducer';

describe('UserSelectors', () => {
  const initialState: fromUser.State = {
    currentUser: {
      firstName: 'Victor Cesar',
      lastName: 'PB',
      email: 'victorcmggg@gmail.com',
    } as User,
    currentLang: 'en',
  };

  describe('Current User', () => {
    it('should select the current user - v1', () => {
      expect(fromUserSelectors.selectUser.projector(initialState)).toEqual(
        initialState.currentUser,
      );
    });

    it('should select the current user - v2', () => {
      const state: fromUser.State = {
        currentUser: undefined,
        currentLang: 'en',
      };
      expect(fromUserSelectors.selectUser.projector(state)).toEqual(undefined);
      expect(fromUserSelectors.selectUser.projector({ user: undefined })).toEqual(undefined);
      expect(fromUserSelectors.selectUser.projector(undefined)).toEqual(undefined);
    });
  });

  describe('Current Language', () => {
    it('should select the current language - v1', () => {
      expect(fromUserSelectors.selectLanguage.projector(initialState)).toEqual('en');
    });

    it('should select the current language - v2', () => {
      expect(fromUserSelectors.selectLanguage.projector(undefined)).toEqual(undefined);
      expect(fromUserSelectors.selectLanguage.projector({ user: undefined })).toEqual(undefined);
    });
  });
});
