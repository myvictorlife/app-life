/*
 * File: login.page.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 11:43:54 pm
<<<<<<< HEAD
 * Last Modified: Sunday, 28th November 2021 5:53:30 am
=======
 * Last Modified: Saturday, 27th November 2021 2:57:49 pm
>>>>>>> main
 * Copyright © 2021 My Custom Life
 */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { authActions } from '@life-store/auth/auth.actions';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

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

  constructor(
    public alertController: AlertController,
    private store: Store,
    private actions$: Actions,
    private router: Router
  ) {}

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

    this.actions$
      .pipe(ofType(authActions.signInWithEmailAndPasswordSuccess))
      .subscribe((data: any) => {
        this.redirectToHomePage();
      });

    this.actions$
      .pipe(ofType(authActions.signInWithEmailAndPasswordFailed))
      .subscribe((error: any) => {
        console.log('Error :(', error);
        this.presentAlertError(error.message);
      });
  }

  async redirectToHomePage() {
    this.router.navigate(['home']);
  }

  async presentAlertError(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Not Logged',
      message,
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
