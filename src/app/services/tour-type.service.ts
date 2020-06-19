import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StartCity} from "../model/StartCity";
import {TourType} from "../model/TourType";

@Injectable({
  providedIn: 'root'
})
export class TourTypeService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any>{
    return this.http.get('//localhost:8080/tourtype/show');
  }


  add(tourType: TourType){
    return this.http.post('//localhost:8080/tourtype/add', tourType)
  }

  delete(id: number){
    return this.http.delete(`//localhost:8080/tourtype/delete/${id}`)
  }

}
