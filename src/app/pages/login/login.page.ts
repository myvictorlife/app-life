/*
 * File: login.page.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 11:43:54 pm
 * Last Modified: Sunday, 28th November 2021 12:11:18 pm
 * Copyright © 2021 My Custom Life
 */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { authActions } from '@life-store/auth/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'life-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

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
