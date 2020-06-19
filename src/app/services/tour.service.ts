import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FilterDTO} from "../dto/FilterDTO";
import {Tour} from "../model/Tour";

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any>{
    return this.http.get(`//localhost:8080/tour/show`);
  }

  add(tour: Tour){
    return this.http.post(`//localhost:8080/tour/add`, tour)
  }

  getByFilters(filter: FilterDTO): Observable<any>{
    return this.http.get(`//localhost:8080/tour/show/${filter.tourTypeId}/${filter.cityStartId}/${filter.countryId}/${filter.price}/${filter.during}/${filter.date}`);
  }


  delete(id: number){
    return this.http.delete(`//localhost:8080/tour/delete/${id}`)
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', '//localhost:8080/upload/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
}
