import { TokenServiceService } from './../service/token-service.service';
import { Citizen } from './../model/citizen';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../service/http-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLogin = false;
  citizen!: Citizen;
  constructor(
    private tokenService: TokenServiceService,
    private httpService: HttpServiceService,
    private activatedRoute: ActivatedRoute
  ) {}
  public ngOnInit(): void {
    var id=0;
      id=Number(localStorage.getItem('citizen_id'));
      console.log(id);
    if (id !== 0) {
      this.isLogin=true;
      console.log(id);
      this.httpService
        .getCitizenInfor(id)
        .subscribe((data) => {
          // console.log(data);
          this.citizen=data;
        });
    }
  }
  public logout(): void {
    this.tokenService.logout();
  }
}
