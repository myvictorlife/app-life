/*
 * File: auth.service.ts
 * Project: LIFE
 * Created: Thursday, 25th November 2021 6:47:38 pm
 * Last Modified: Friday, 26th November 2021 11:33:53 pm
 * Copyright © 2021 My Custom Life
 */

import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { from, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endpoint = environment;

  constructor(private angularFireAuth: AngularFireAuth) {}

  doLogin(email: string, password: string): Observable<auth.UserCredential> {
    return from(this.angularFireAuth.signInWithEmailAndPassword(email, password)).pipe(
      map((user) => user),
      catchError(this.handleError<any>('Get Life Info', {} as any)),
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private getAuthURL() {
    return this.endpoint.baseUrl + this.endpoint.functions.user + this.endpoint.apis.auth.login;
  }
}
