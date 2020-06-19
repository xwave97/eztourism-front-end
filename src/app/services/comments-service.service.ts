import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comments} from "../model/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {
  }
  getAll(id: number): Observable<any>{
    return this.http.get(`//localhost:8080/comments/show/${id}`);
  }

  add(comment: Comments){
    return this.http.post(`//localhost:8080/comments/add`, comment);
  }
}
