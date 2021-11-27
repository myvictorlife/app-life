/*
 * File: auth.service.spec.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 11:43:54 pm
 * Last Modified: Friday, 26th November 2021 8:08:11 pm
 * Copyright © 2021 My Custom Life
 */

import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
describe('AuthService', () => {
  let service: AuthService;
  const authStub: any = {
    authState: {},
    signInWithEmailAndPassword: (email: string, password: string) =>
      Promise.resolve({ email, password }),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, { provide: AngularFireAuth, useValue: authStub }],
      imports: [],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should do Login', () => {
    const angularFireAuthSpy = TestBed.inject(AngularFireAuth);
    const authSpy = jest.spyOn(angularFireAuthSpy, 'signInWithEmailAndPassword');
    const email = 'life@my-custom-life.com';
    const password = '123456';
    service.doLogin(email, password);
    expect(service).toBeTruthy();
    expect(authSpy).toHaveBeenCalledWith(email, password);
  });
});
