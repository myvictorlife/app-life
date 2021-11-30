/*
 * File: login.page.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 11:43:54 pm
 * Last Modified: Tuesday, 30th November 2021 7:45:29 pm
 * Copyright © 2021 My Custom Life
 */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { authActions } from '@life-store/auth/auth.actions';
import { selectIsLoadingSpinnerActive } from '@life-store/ui-components/loading/selectors/loading.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'life-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isLoadingActive$: Observable<any>;
  validationMessages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' },
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
    ],
  };

  constructor(private store: Store) {}

  ngOnInit() {
    this.isLoadingActive$ = this.store.select(selectIsLoadingSpinnerActive);
    this.loginForm = new FormGroup({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ]),
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.minLength(5), Validators.required]),
      ),
    });
  }

  doLogin() {
    const { email, password } = this.loginForm.getRawValue();

    this.store.dispatch(
      authActions.signInWithEmailAndPassword({
        email,
        password,
      }),
    );
  }
}
