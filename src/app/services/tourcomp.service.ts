import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TourComp} from "../model/TourComp";

@Injectable({
  providedIn: 'root'
})
export class TourCompService {

  constructor(private http: HttpClient) {
  }
  getAll(str: String): Observable<any>{
    return this.http.get(`//localhost:8080/tourComp/show/${str}`);
  }

  add(tourComp: TourComp){
    return this.http.post(`//localhost:8080/tourComp/add`, tourComp)
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

  delete(id: number){
    return this.http.delete(`//localhost:8080/tourComp/delete/${id}`)
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
