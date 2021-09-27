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

  public savePerson(person:any): Observable<any>{
    return this.http.post(`${environment.ApiUrl}person/savePerson`, person);
  }

  public deletePerson(id:any):Observable<any>{
    return this.http.delete(`${environment.ApiUrl}delete/${id}`);
  }
}
