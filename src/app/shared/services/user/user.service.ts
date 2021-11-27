/*
 * File: user.service.ts
 * Project: LIFE
 * Created: Tuesday, 23rd November 2021 9:34:45 pm
 * Last Modified: Friday, 26th November 2021 11:35:23 pm
 * Copyright © 2021 My Custom Life
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@life-store/models/user.model';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private endpoint = environment;

  constructor(private httpClient: HttpClient) {}

  createNewUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.getNewUserURL(), user).pipe(
      map((userCreated) => userCreated),
      catchError(this.handleError<User>('Get Error when trying to create new user', user)),
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private getNewUserURL(): string {
    return `${this.endpoint.baseUrl}${this.endpoint.functions.user}${this.endpoint.apis.user.createNewUser}`;
  }
}
