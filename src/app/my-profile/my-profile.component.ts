import { Locationn } from './../model/location';
import { Component } from '@angular/core';
import { Citizen } from '../model/citizen';
import { HttpServiceService } from '../service/http-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  citizen!: Citizen;
  address!: string;
  family!:Array<Citizen>;
  crimeRecord!:Array<String>;
  constructor(private httpService: HttpServiceService){
    var id=0;
    id=Number(localStorage.getItem('citizen_id'));
    console.log(id);
    if (id !== 0) {
      console.log(id);
      this.httpService
        .getCitizenInfor(id)
        .subscribe((data) => {
          console.log(data);
          this.citizen=data;
          this.getFamilyInfo();
          this.crimeRecord=this.citizen.criminalRecord.split(".");
          this.address=this.citizen.address+" / "+this.citizen.location.quarter+" / "+this.citizen.location.district+" / "+this.citizen.location.town+" / "+this.citizen.location.city;
        });
    }
  }
  public ngOnInit(): void {
    // var id=0;
    // id=Number(localStorage.getItem('citizen_id'));
    // console.log(id);
    // if (id !== 0) {
    //   console.log(id);
    //   this.httpService
    //     .getCitizenInfor(id)
    //     .subscribe((data) => {
    //       console.log(data);
    //       this.citizen=data;
    //     });
    // }
  }
  public getFamilyInfo(): void{
    this.httpService.getFamilyInfo(Number(this.citizen.family)).subscribe((data) => {
            console.log(data);
            this.family=data;
          });
  }
}
