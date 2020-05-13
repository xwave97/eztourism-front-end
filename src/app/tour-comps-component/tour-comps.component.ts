import {Component, OnInit} from '@angular/core';
import {TourCompService} from '../services/tourcomp.service';
import {Observable} from 'rxjs';
import {DataService} from '../services/date-service.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './tour-comps.component.html',
  styleUrls:['./tour-comps.component.css']
})
export class TourCompsComponent implements OnInit{
  title = 'eztourism-front-end';

  constructor(private service: TourCompService,
              private dataService: DataService,
              private route: Router,
              private cookieService: CookieService){}

  tourComps: Observable<any>;
  compsCount: number;

  ngOnInit(){
    this.loadCompanies();
  }

  loadCompanies(){
    this.service.getAll().subscribe(response =>{
      this.tourComps = response;
      this.compsCount = response.length;
    })

  }

  setId(){
    this.cookieService.set("tourCompId", "1");
    console.log(this.cookieService.get("tourCompId"));
    // this.dataService.setData(1);
    this.route.navigate(["/singleTourComp"]);
  }

}

