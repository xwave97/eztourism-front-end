import {Component, OnInit} from '@angular/core';
import { User } from '../model/User';
import {ArticleService} from '../services/article-service.service';
import {Observable} from 'rxjs';
import {CountryService} from '../services/country.service';
import {TourCompService} from '../services/tourcomp.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'eztourism-front-end';

  articles: Observable<any>;
  countries: Observable<any>;
  companies: Observable<any>;

  constructor(private articleService: ArticleService,
              private countryService: CountryService,
              private tourCompService: TourCompService){}

  ngOnInit(){
    this.articleService.getAll().subscribe(response =>{
      this.articles = response;
    });
    this.countryService.getAll().subscribe(response =>{
      this.countries = response;
    })
    this.tourCompService.getAll().subscribe(response =>{
      this.companies = response;
    })
  }


}

