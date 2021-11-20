import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@life-store/models/user.model';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endpoint = environment;

  constructor(private httpClient: HttpClient) {}

  doLogin(credentials: any): Observable<User> {
    return this.httpClient
      .post<User>(this.getAuthURL(), credentials)
      .pipe(catchError(this.handleError<any>('Get Life Info', {} as any)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private getAuthURL() {
    return this.endpoint.baseUrl + this.endpoint.apis.auth.login;
  }
}
