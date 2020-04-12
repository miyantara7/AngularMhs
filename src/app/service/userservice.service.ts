import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/UserResponse';
import { Observable } from 'rxjs';
import { Covid } from '../model/covidpajay';
import { Temp } from '../model/Temp';
import { Mahasiswa } from '../model/Mhs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService implements OnInit{
  readonly uri = "http://localhost:8080/";
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }

  public getUsers(userrequest) : Observable<User>{
    return this.http.post<User>(this.uri+"login",userrequest)
  }
  public setMhss(mhsreq) : Observable<Mahasiswa>{
    return this.http.post<Mahasiswa>(this.uri+"insert",mhsreq)
  }
}
