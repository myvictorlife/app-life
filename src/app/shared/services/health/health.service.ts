/*
 * File: health.service.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 9:22:01 am
 * Last Modified: Friday, 26th November 2021 10:40:02 pm
 * Copyright © 2021 My Custom Life
 */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Health } from '@life-store/models/health.model';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HealthService {
  private endpoint = environment;

  constructor(private httpClient: HttpClient) {}

  getInfo(): Observable<Health> {
    console.log(this.getHealthInfoURL());
    return this.httpClient
      .get<Health>(this.getHealthInfoURL())
      .pipe(catchError(this.handleError<Health>('Get info', {} as Health)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private getHealthInfoURL(): string {
    return `${this.endpoint.baseUrl}${this.endpoint.functions.health}${this.endpoint.apis.health.info}`;
  }
}
