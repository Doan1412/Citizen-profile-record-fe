import { Citizen } from './../model/citizen';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from "moment";
import { LoginResponse } from '../model/loginResponse';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenServiceService {
  constructor(private http: HttpClient,private router: Router) {}
  public login(citizen_id:string,password:string){
    console.log(citizen_id,password);
    localStorage.clear();
    return this.http.post<LoginResponse>(`http://localhost:8080/api/v1/auth/authenticate`, {citizen_id, password})
    .subscribe(response => {
      // login successful if there's a jwt token in the response
      if (response && response.accessToken) {
        
        // store access token in local storage to keep user logged in between page refreshes
        //localStorage.setItem('currentUser', JSON.stringify({ citizen_id, token: response.token, role: response.role, refreshToken: response.refreshToken}));
        localStorage.setItem('citizen_id',citizen_id);
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('role', JSON.stringify(response.role));
        localStorage.setItem('refreshToken', response.refreshToken);
        localStorage.setItem('expiryDuration',response.expiryDuration.toString());
        console.log("User is logged in");
        this.router.navigateByUrl('/');
      }
    });
  }
  // private setSession(authResult : any) {
  //   const expiresAt = moment().add(authResult.expiresIn, 'second');

  //   localStorage.setItem('id_token', authResult.idToken);
  //   localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  // }
  logout() {
    localStorage.clear();
    this.http.get<any>(`http://localhost:8080/api/v1/auth/signout`);
  }
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = moment().valueOf()+5*60*60*1000;
    return moment(expiresAt);
  }
  refreshToken(): Observable<LoginResponse> {
    const refreshToken = localStorage.getItem('refreshToken');
    const citizenId = localStorage.getItem('citizen_id');
    return this.http.post<LoginResponse>(`http://localhost:8080/api/v1/auth/refreshtoken`, { refreshToken, citizenId}).pipe(
      tap((res: LoginResponse) => {
        localStorage.setItem('access_token', res.accessToken);
        //localStorage.setItem('refresh_token', res.refreshToken);
        const expiresAt = new Date().getTime() + res.expiryDuration * 1000;
        localStorage.setItem('expires_at', JSON.stringify(expiresAt));
      })
    );
  }

}
