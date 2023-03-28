import { Politician } from './../model/politician';
import { Opinion } from '../model/Opinion';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Citizen } from '../model/citizen';
import { Observable } from 'rxjs';
import { Appointment } from '../model/Appointment';
import { Requirement } from '../model/Requirement';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private Rest_API_SERVER = 'http://localhost:8080/api/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  public getCitizenInfor(id:number):Observable<Citizen>{
    const url=`${this.Rest_API_SERVER}citizen/listCitizen/id=`+id;
    return this.httpClient.get<Citizen>(url,this.httpOptions);
  }
  public getFamilyInfo(id:number):Observable<Array<Citizen>>{
    const  url=`${this.Rest_API_SERVER}citizen/family/id=`+id;
    return this.httpClient.get<Array<Citizen>>(url,this.httpOptions);
  }
  public addFeedback(author_id:number,description:string,topic : string):Observable<Opinion> {
    const  url=`http://localhost:8080/opinions/new`;
    console.log({author_id,description,topic});
    return this.httpClient.post<Opinion>(url,{author_id,description,topic});
  }
  public getListPoliticians(levelManageEncode: string,areaManageEncode : string ):Observable<Array<Politician>>{
    const url=`${this.Rest_API_SERVER}politician/listPolitician/?levelManageEncode=`+levelManageEncode+`&areaManageEncode=`+areaManageEncode;
    return this.httpClient.get<Array<Politician>>(url,this.httpOptions);
  }
  public addAppointment(appointment: Appointment): Observable<any>{
    const url=`${this.Rest_API_SERVER}appointment/new`;
    return this.httpClient.post<Appointment>(url,appointment);
  }
  public addRequirements(requirement:Requirement): Observable<any>{
    const url=`${this.Rest_API_SERVER}requirement/new`;
    return this.httpClient.post<Requirement>(url,requirement);
  }
}
