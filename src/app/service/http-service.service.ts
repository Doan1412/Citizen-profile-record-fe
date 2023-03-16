import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Citizen } from '../model/citizen';
import { Observable } from 'rxjs';
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
}
