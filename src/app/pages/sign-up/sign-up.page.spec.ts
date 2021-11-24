/*
 * File: sign-up.page.spec.ts
 * Project: LIFE
 * Created: Sunday, 21st November 2021 12:25:43 pm
 * Last Modified: Wednesday, 24th November 2021 11:42:52 pm
 * Copyright © 2021 My Custom Life
 */

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '@life-components/components.module';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { SignUpPage } from './sign-up.page';

import { selectUser } from '@life-store/user/user.selectors';
import { userActions } from '@life-store/user/user.actions';
import { User } from '@life-store/models/user.model';
describe('SignUpPage', () => {
  let component: SignUpPage;
  let fixture: ComponentFixture<SignUpPage>;
  let store: MockStore;
  const initialState = {};
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SignUpPage],
        imports: [
          IonicModule.forRoot(),
          ReactiveFormsModule,
          ComponentsModule,
          RouterTestingModule,
        ],
        providers: [
          provideMockStore({
            initialState,
          }),
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(SignUpPage);
      component = fixture.componentInstance;
      store = TestBed.inject(MockStore);
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init', () => {
    jest.spyOn(store, 'select').mockImplementation();
    const selector = selectUser;
    component.ngOnInit();
    expect(store.select).toHaveBeenCalledWith(selector);
    expect(component.signupForm.getRawValue()).toEqual({
      email: '',
      matchingPasswords: {
        confirmPassword: '',
        password: '',
      },
    });
    expect(component.signupForm.invalid).toBeTruthy();
  });

  it('should do signup', () => {
    jest.spyOn(store, 'dispatch').mockImplementation();
    component.signupForm.get('email').setValue('unit-test@life.com');
    component.doSignup();
    const user: User = {
      firstName: '',
      lastName: '',
      email: 'unit-test@life.com',
      password: '',
    };
    expect(store.dispatch).toHaveBeenCalledWith(userActions.createUser({ user }));
  });
});
