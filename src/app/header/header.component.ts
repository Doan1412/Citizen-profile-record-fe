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
  isLogin = true;
  citizen!: Citizen;
  constructor(
    private httpService: HttpServiceService,
    private activatedRoute: ActivatedRoute
  ) {}
  public ngOnInit(): void {
    var id=0;
    const data = JSON.parse(localStorage.getItem('currentUser')||'');
      id=Number(data.citizen_id);
    if (id !== 0) {
      this.isLogin=true;
      console.log(id);
      this.httpService
        .getCitizenInfor(id)
        .subscribe((data) => {
          console.log(data);
          this.citizen=data;
        });
    }
  }
}
