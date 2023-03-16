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
      if (request.url === `http://localhost:8080/api/v1/auth/refreshtoken`||request.url === `https://cdn.jsdelivr.net/gh/vietblogdao/js/districts.min.js`) {
        request = request.clone({
          headers: request.headers.delete('Authorization')
        });
      }
      return next.handle(request).pipe(
        catchError((error) => {
          if(error.status === 403){
            return this.tokenService.refreshToken().pipe(
                  switchMap((response: LoginResponse) => {
                    console.log(response);
                    localStorage.setItem('accessToken',response.accessToken);
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
          // if (error.status === 401 && !request.url.includes('/refreshtoken')) {
          //   return this.tokenService.refreshToken().pipe(
          //     switchMap((response: LoginResponse) => {
          //       console.log(response);
          //       localStorage.setItem('accessToken',response.accessToken);
          //       request = request.clone({
          //         setHeaders: {
          //           Authorization: `Bearer ${response.accessToken}`,
          //         },
          //       });
          //       return next.handle(request);
          //     }),
          //     catchError(() => {
          //       this.tokenService.logout();
          //       this.router.navigateByUrl('/login');
          //       return throwError(error);
          //     })
          //   );
          // }
          return throwError(error);
        })
      );
    }
    else {
      console.log("t2");
      this.router.navigate(['/login']);
    }
    console.log("t3");
    return next.handle(request);
  }
}
