import { LoginResponse } from './../model/loginResponse';
import { TokenServiceService } from './token-service.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorServiceService implements HttpInterceptor {
  constructor(
    private tokenService: TokenServiceService,
    private router: Router
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log("t0");
    const token = localStorage.getItem('accessToken');
    if (token!==null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('t1');
      return next.handle(request).pipe(
        catchError((error) => {
          if (error.status === 401 && !request.url.includes('/refreshtoken')) {
            return this.tokenService.refreshToken().pipe(
              switchMap((response: LoginResponse) => {
                request = request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${response.accessToken}`,
                  },
                });
                return next.handle(request);
              }),
              catchError(() => {
                this.tokenService.logout();
                this.router.navigateByUrl('/login');
                return throwError(error);
              })
            );
          }
          return throwError(error);
        })
      );
    }
    else {
      console.log("t2");
      this.router.navigateByUrl('/login');
    }
    console.log("t3");
    return next.handle(request);
  }
}
