import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from "../model/Country";
import {StartCity} from "../model/StartCity";

@Injectable({
  providedIn: 'root'
})
export class StartCityService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any>{
    return this.http.get('//localhost:8080/startcity/show');
  }

  add(startCity: StartCity){
    return this.http.post('//localhost:8080/startcity/add', startCity)
  }

  delete(id: number){
    return this.http.delete(`//localhost:8080/startcity/delete/${id}`)
  }
}
