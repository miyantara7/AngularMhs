import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Mahasiswa } from '../model/Mhs';
const TOKEN_HEADER_KEY = 'Authorization'; 
@Injectable({
  providedIn: 'root'
})
export class Service1Service implements OnInit {

  readonly uri = "http://localhost:8080/admins";
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }

  public getNotMhs() : Observable<Mahasiswa[]>{
    return this.http.get<Mahasiswa[]>(this.uri+"/list")
  }
  public getAccMhs() : Observable<Mahasiswa[]>{
    return this.http.get<Mahasiswa[]>(this.uri+"/listacc")
  }
  public getRejectMhs() : Observable<Mahasiswa[]>{
    return this.http.get<Mahasiswa[]>(this.uri+"/listreject")
  }
  public acceptMhs(Mhs){
    return this.http.post(this.uri+"/accept",Mhs,{responseType:'text' as 'json'});
  }
  public rejectMhs(Mhs){
    return this.http.post(this.uri+"/reject",Mhs,{responseType:'text' as 'json'});
  }
  
  
  

  public doGetAll(): Observable<number[]>{
    return this.http.get<number[]>(this.uri+"/viewall");
  }
}
