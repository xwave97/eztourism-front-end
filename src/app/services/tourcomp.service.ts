import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TourComp} from "../model/TourComp";

@Injectable({
  providedIn: 'root'
})
export class TourCompService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any>{
    return this.http.get('//localhost:8080/tourComp/show');
  }

  getSingle(id: number): any{
    return this.http.get(`//localhost:8080/tourComp/showSingle/${id}`);
  }

  pressLike(id: number){
    return this.http.put(`//localhost:8080/tourComp/setLike/${id}`, 1);
  }

  pressDislike(id: number){
    return this.http.put(`//localhost:8080/tourComp/setDislike/${id}`, 1);
  }
}
