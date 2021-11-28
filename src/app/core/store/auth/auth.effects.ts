/*
 * File: auth.effects.ts
 * Project: LIFE
 * Created: Friday, 26th November 2021 8:19:59 pm
 * Last Modified: Sunday, 28th November 2021 12:12:33 pm
 * Copyright © 2021 My Custom Life
 */

import { Injectable } from '@angular/core';
import { AuthService } from '@life-service/auth/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { authActions } from '@life-store/auth/auth.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Injectable()
export class AuthEffects {
  authSignInWithEmailAndPassword$ = createEffect(() =>
    /* eslint-disable-next-line */
    this.actions$.pipe(
      ofType(authActions.signInWithEmailAndPassword),
      mergeMap((action) =>
        this.authService.doLogin(action.email, action.password).pipe(
          map((user) => {
            this.redirectToHomePage();
            return authActions.signInWithEmailAndPasswordSuccess({ user });
          }),
          catchError(async (error) => {
            this.presentAlertError('Please, check your email and password.');
            return authActions.signInWithEmailAndPasswordFailed({
              error: {
                message: 'Please, check your email and password.'
              }
            });
          }),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    public alertController: AlertController,
    private router: Router
    ) {}

  async presentAlertError(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Not Logged',
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
  async redirectToHomePage() {
    this.router.navigate(['home']);
  }
}
