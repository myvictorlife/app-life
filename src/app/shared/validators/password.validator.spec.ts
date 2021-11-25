/*
 * File: password.validatorr.spec.ts
 * Project: LIFE
 * Created: Wednesday, 24th November 2021 11:56:00 pm
 * Last Modified: Thursday, 25th November 2021 12:07:29 am
 * Copyright © 2021 My Custom Life
 */

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';

describe('PasswordValidator', () => {
  let component: PasswordValidator;

  beforeEach(() => {
    component = new PasswordValidator();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should password be equals', () => {
    const signupForm = new FormGroup({
      password: new FormControl(
        '',
        Validators.compose([Validators.minLength(5), Validators.required]),
      ),
      confirmPassword: new FormControl('', Validators.required),
    });
    const response = PasswordValidator.areNotEqual(signupForm);
    expect(response).toEqual(null);
  });

  it('should not password be equals', () => {
    const signupForm = new FormGroup({
      password: new FormControl(
        '123',
        Validators.compose([Validators.minLength(5), Validators.required]),
      ),
      confirmPassword: new FormControl('321', Validators.required),
    });
    const response = PasswordValidator.areNotEqual(signupForm);
    expect(response).toEqual({
      areNotEqual: true,
    });
  });
});
