import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const LOCAL_STORAGE_AUTH_TOKEN_NAME = 'auth-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token: string | null = null;

  constructor(private _http: HttpClient, private _router: Router) {
    this._token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_NAME);
  }

  get isAuth() {
    return !!this._token;
  }

  setToken(token: string) {
    this._token = token;
    localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN_NAME, token);
  }

  login(email: string, password: string) {
    return this._http
      .post<{ token: string }>('https://reqres.in/api/login', {
        email,
        password,
      })
      .pipe(
        tap(({ token }) => this.setToken(token)),
        map(noop),
        catchError((response: HttpErrorResponse) => {
          const { error } = response.error as { error: string };
          this.logout();
          return throwError(() => error);
        })
      );
  }

  logout() {
    this._token = null;
    localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN_NAME);
    this._router.navigate(['/login'], {
      replaceUrl: true,
      state: {
        from: window.location.pathname,
      },
    });
  }

  registration(email: string, password: string) {
    return this._http
      .post<{ id: number; token: string }>('https://reqres.in/api/register', {
        email,
        password,
      })
      .pipe(
        tap(({ token }) => this.setToken(token)),
        map(({ id }) => ({ id }))
      );
  }
}
