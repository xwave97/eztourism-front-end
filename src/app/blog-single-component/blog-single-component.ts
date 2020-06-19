import {Component, OnInit} from '@angular/core';
import { User } from '../model/User';
import {ArticleService} from '../services/article-service.service';
import {Observable} from 'rxjs';
import {CountryService} from '../services/country.service';
import {TourCompService} from '../services/tourcomp.service';
import {TourService} from "../services/tour.service";
import {Article} from "../model/Article";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './blog-single-component.html',
  styleUrls:['./blog-single-component.css']
})
export class BlogSingleComponent implements OnInit{
  title = 'eztourism-front-end';

  article: Article;
  id: number

  constructor(private articleService: ArticleService,
              private cookieService: CookieService,
              private tourService: TourCompService){}

  ngOnInit(){
    this.loadBlog();

  }

  loadBlog() {
    this.id = +this.cookieService.get("blogId");

    this.articleService.getSingle(this.id).subscribe(response => {
      this.article = response;
    });
    console.log(this.article);
  }
}

