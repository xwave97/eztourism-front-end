import {Component, OnInit} from '@angular/core';
import { User } from '../model/User';
import {ArticleService} from '../services/article-service.service';
import {Observable} from 'rxjs';
import {CountryService} from '../services/country.service';
import {TourCompService} from '../services/tourcomp.service';
import {TourService} from "../services/tour.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './blog.component.html',
  styleUrls:['./blog.component.css']
})
export class BlogComponent implements OnInit{
  title = 'eztourism-front-end';
  regex = "/\\s?<p[^>]*?>.*?<\\/p>\\s?/si";
  articles: Observable<any>;

  constructor(private articleService: ArticleService,
              private cookieService: CookieService,
              private route: Router,){}

  ngOnInit(){
    this.articleService.getAll().subscribe(response =>{
      this.articles = response;
    });
  }

  setId(blogId: number){
    let value = blogId+"";
    this.cookieService.set("blogId", value);
    console.log(this.cookieService.get("blogId"));
    // this.dataService.setData(1);
    this.route.navigate(["/singleblog"]);
  }


}

