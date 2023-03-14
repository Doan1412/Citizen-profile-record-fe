import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from "moment";
import { LoginResponse } from '../model/loginResponse';

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
      if (response && response.token) {
        
        // store access token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify({ citizen_id, token: response.token, role: response.role, refreshToken: response.refreshToken}));
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
    localStorage.removeItem('currentUser');
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
}
