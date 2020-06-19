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
  templateUrl: './contact.component.html',
  styleUrls:['./contact.component.css']
})
export class ContactComponent implements OnInit{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
  title = 'eztourism-front-end';


  tours: Observable<any>;

  constructor(){}



}

