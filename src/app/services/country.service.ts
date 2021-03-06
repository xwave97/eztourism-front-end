import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from "../model/Country";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any>{
    return this.http.get('//localhost:8080/country/show');
  }

  add(country: Country){
    return this.http.post('//localhost:8080/country/add', country)
  }

  delete(id: number){
    return this.http.delete(`//localhost:8080/country/delete/${id}`)
  }
}
