import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http:HttpClient) { }

  public getPersonal(): Observable<any>{
    return this.http.get(`${environment.ApiUrl}person/`);
  }
  public getBosses(): Observable<any>{
    return this.http.get(`${environment.ApiUrl}boss/`);
  }
}
