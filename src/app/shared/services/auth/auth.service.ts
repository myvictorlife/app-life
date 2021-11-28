/*
 * File: auth.service.ts
 * Project: LIFE
 * Created: Thursday, 25th November 2021 6:47:38 pm
 * Last Modified: Sunday, 28th November 2021 10:37:12 am
 * Copyright © 2021 My Custom Life
 */

import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) {}

  doLogin(email: string, password: string): Observable<auth.UserCredential> {
    return this.signInWithEmailAndPassword(email, password).pipe(
      map((user) => user),
      catchError((err: any, caught: Observable<any>) => err)
    );
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return from(this.angularFireAuth.signInWithEmailAndPassword(email, password));
  }

  // signOut(): Observable<void> {
  //   return from(this.angularFireAuth.signOut());
  // }
}
