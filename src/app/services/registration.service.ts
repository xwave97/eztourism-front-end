import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class RegistrationService{

    constructor(private http: HttpClient){}

    getAll(): Observable<any>{
      return this.http.get('//localhost:8080/registration/show')
    }

    add(user: Object): Observable<any>{
        return this.http.post('//localhost:8080/registration/add', user);
    }

    auth(user: Object): Observable<any>{
      return this.http.post('//localhost:8080/registration/auth', user);
    }


  delete(id: number){
    return this.http.delete(`//localhost:8080/registration/delete/${id}`)
  }
}
