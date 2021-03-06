/*
 * File: sign-up.page.ts
 * Project: LIFE
 * Created: Sunday, 21st November 2021 12:25:43 pm
 * Last Modified: Tuesday, 30th November 2021 7:45:38 pm
 * Copyright © 2021 My Custom Life
 */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '@life-shared/validators/password.validator';
import { userActions } from '@life-store/user/user.actions';
import { Store } from '@ngrx/store';
import { User } from '@life-store/models/user.model';
import { Observable } from 'rxjs';
import { selectUser } from '@life-store/user/user.selectors';
import { Router } from '@angular/router';
import { selectIsLoadingSpinnerActive } from '@life-store/ui-components/loading/selectors/loading.selectors';
@Component({
  selector: 'life-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  signupForm: FormGroup;
  matchingPasswordsGroup: FormGroup;
  user$: Observable<User>;
  isLoadingActive$: Observable<any>;
  hasVerifiedEmail = true;
  sentTimestamp;

  isLoading = false;

  validationMessages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' },
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
    ],
    confirmPassword: [{ type: 'required', message: 'Confirm password is required' }],
    matchingPasswords: [{ type: 'areNotEqual', message: 'Password mismatch' }],
  };
  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.isLoadingActive$ = this.store.select(selectIsLoadingSpinnerActive);
    this.user$ = this.store.select(selectUser);
    this.matchingPasswordsGroup = new FormGroup(
      {
        password: new FormControl(
          '',
          Validators.compose([Validators.minLength(5), Validators.required]),
        ),
        confirmPassword: new FormControl('', Validators.required),
      },
      (formGroup: FormGroup) => PasswordValidator.areNotEqual(formGroup),
    );

    this.signupForm = new FormGroup({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ]),
      ),
      matchingPasswords: this.matchingPasswordsGroup,
    });
  }

  doSignup() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.matchingPasswords.password;
    const user: User = { firstName: '', lastName: '', email, password };
    this.store.dispatch(userActions.createUser({ user }));
    this.signupForm.reset();
  }
}
