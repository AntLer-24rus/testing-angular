import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const headers: Record<string, string> = {};
    if (this._authService.isAuth) {
      // eslint-disable-next-line dot-notation
      headers['authorization'] = `Token ${this._authService.getToken()}`;
    }
    const req = request.clone({
      setHeaders: {
        ...headers,
      },
    });
    return next.handle(req);
  }
}
