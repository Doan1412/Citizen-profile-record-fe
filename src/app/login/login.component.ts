import { HttpServiceService } from './../service/http-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenServiceService } from '../service/token-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup ;
  constructor(private formBuilder: FormBuilder,
              private httpService: HttpServiceService,
              private router: Router,
              private tokenService: TokenServiceService,) {
    this.loginForm = this.formBuilder.group({
      citizen_id: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  login () {
    const val=this.loginForm.value;
    if(val.citizen_id!==""&&val.password!==""){
      console.log(val.citizen_id+"  "+val.password);
      this.tokenService.login(val.citizen_id, val.password)
    }
  }
}
