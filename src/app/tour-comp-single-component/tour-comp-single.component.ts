import {Component, OnInit} from '@angular/core';
import {TourCompService} from '../services/tourcomp.service';
import {Observable} from 'rxjs';
import {DataService} from '../services/date-service.service';
import {CookieService} from 'ngx-cookie-service';
import {TourComp} from '../model/TourComp';

@Component({
  selector: 'app-root',
  templateUrl: './tour-comp-single.component.html',
  styleUrls:['./tour-comp-single.component.css']
})
export class TourCompSingleComponent implements OnInit{
  title = 'eztourism-front-end';



  constructor(private service: TourCompService,
              private dataService: DataService,
              private cookieService: CookieService){

  }

  id: number;
  tourComps: Observable<any>;
  tourCompany: TourComp;


  ngOnInit(){
    this.loadCompany();
  }

  loadCompany(){
    this.id = +this.cookieService.get("tourCompId");
    this.service.getSingle(this.id).subscribe(response =>{
      this.tourCompany = response;
    });
  }

  pressLike(){
    this.service.pressLike(1).subscribe(()=>{
      this.loadCompany();
    });
  }

  pressDislike(){
    this.service.pressDislike(1).subscribe(()=>{
      this.loadCompany();
    });
  }




}


