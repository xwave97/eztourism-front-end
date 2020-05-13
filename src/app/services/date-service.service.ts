import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private data:any = undefined;

  setData(data:any){
    this.data = data;
  }

  getData():any{
    return this.data
  }
}
