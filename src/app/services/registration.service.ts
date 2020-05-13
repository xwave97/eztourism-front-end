import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RegistrationService{

    constructor(private http: HttpClient){}

    add(user: Object): Observable<any>{
        return this.http.post('//localhost:8080/registration/add', user);
    }


}
