import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
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

  constructor(private service: TourCompService,
              private dataService: DataService,
              private route: Router,
              private cookieService: CookieService,
              private componentFactoryResolver: ComponentFactoryResolver){}

  tourComps: Observable<any>;
  compsCount: number;
  tourCompId: number;
  tourCompFilt= "";

  ngOnInit(){
    this.loadCompanies();
  }

  loadCompanies(){
    console.log(this.tourCompFilt);
    if(this.tourCompFilt === ""){
      this.service.getAll("undefined").subscribe(response =>{
        this.tourComps = response;
        this.compsCount = response.length;
      })
    }
    if(this.tourCompFilt !== ""){
      this.service.getAll(this.tourCompFilt).subscribe(response =>{
        console.log("Проверочка!!!")
        this.tourComps = response;
        this.compsCount = response.length;
      })
    }
  }



  setId(tourCompid: number){
    let value = tourCompid+"";
    this.cookieService.set("tourCompId", value);
    console.log(this.cookieService.get("tourCompId"));
    // this.dataService.setData(1);
    this.route.navigate(["/singleTourComp"]);
  }

}

