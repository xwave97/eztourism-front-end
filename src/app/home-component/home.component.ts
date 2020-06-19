import {Component, OnInit} from '@angular/core';
import { User } from '../model/User';
import {ArticleService} from '../services/article-service.service';
import {Observable} from 'rxjs';
import {CountryService} from '../services/country.service';
import {TourCompService} from '../services/tourcomp.service';
import {TourService} from "../services/tour.service";
import {CookieService} from "ngx-cookie-service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'eztourism-front-end';

  articles: [any];
  articles1: [any];
  countries: Observable<any>;
  companies: Observable<any>;
  tours: Observable<any>;

  constructor(private articleService: ArticleService,
              private countryService: CountryService,
              private tourCompService: TourCompService,
              private tourService: TourService,
              private cookieService: CookieService,
              private route: Router){}

  countryId: number;
  price: number;


  ngOnInit(){
    this.articleService.getFour().subscribe(response =>{
      this.articles = response;
    });
    this.countryService.getAll().subscribe(response =>{
      this.countries = response;
    });
    this.tourCompService.getAll("undefined").subscribe(response =>{
      this.companies = response;
    });
    this.tourService.getAll().subscribe(response =>{
      this.tours = response;
    });
  }

  value: string;
  search(){
    if(this.countryId == 0){
      this.value = 0+"";
    }else {
        this.value = this.countryId + "";
    }
    this.cookieService.set("countryId", this.value);
    console.log(this.cookieService.get("countryId"));
    this.route.navigate(["/tours"]);
  }

  check(){
    console.log(this.countryId);
  }
}

