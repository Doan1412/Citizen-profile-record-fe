import { TokenServiceService } from './token-service.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorServiceService implements HttpInterceptor {
  constructor(
    private tokenService: TokenServiceService,
    private router: Router
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (localStorage.getItem('currentUser') !== null) {
      const data = JSON.parse(localStorage.getItem('currentUser') || '');
      const token = data.token;
      if (data !== '' && data !== null && token !== null) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      return next.handle(request).pipe(
        catchError((err) => {
          if (err.status === 401 || err.status === 403) {
            this.tokenService.logout();
            this.router.navigateByUrl('/login');
          }
          return throwError(err);
        })
      );
    } else {
      console.log('test2');
    }
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401 || err.status === 403) {
          this.tokenService.logout();
          this.router.navigateByUrl('/login');
        }
        return throwError(err);
      })
    );
  }
}
