import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from "../model/Article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any>{
    return this.http.get('//localhost:8080/article/show');
  }

  getSingle(id: number): any{
    return this.http.get(`//localhost:8080/article/showSingle/${id}`);
  }

  getFour(): Observable<any>{
    return this.http.get('//localhost:8080/article/showfour');
  }

  add(article: Article){
    return this.http.post('//localhost:8080/article/add', article)
  }

  delete(id: number){
    return this.http.delete(`//localhost:8080/article/delete/${id}`)
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
