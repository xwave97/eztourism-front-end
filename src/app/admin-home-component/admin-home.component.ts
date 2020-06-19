import {Component, OnInit} from '@angular/core';
import { User } from '../model/User';
import {ArticleService} from '../services/article-service.service';
import {Observable} from 'rxjs';
import {CountryService} from '../services/country.service';
import {TourCompService} from '../services/tourcomp.service';
import {TourService} from "../services/tour.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {RegistrationService} from "../services/registration.service";
import {TourTypeService} from "../services/tour-type.service";
import {StartCityService} from "../services/start-city.service";
import {Country} from "../model/Country";
import {StartCity} from "../model/StartCity";
import {TourType} from "../model/TourType";

@Component({
  selector: 'app-root',
  templateUrl: './admin-home.component.html',
  styleUrls:['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{


  constructor(private userService: RegistrationService,
              private articleService: ArticleService,
              private tourService: TourService,
              private tourCompService: TourCompService,
              private countryService: CountryService,
              private tourTypeService: TourTypeService,
              private startCityService: StartCityService){}

  isUsers: boolean;
  isArticles: boolean;
  isTours: boolean;
  isTourComps: boolean;
  isCountries: boolean;
  isTourTypes: boolean;
  isStartCities: boolean;


  users: Observable<any>;
  articles: Observable<any>;
  tours: Observable<any>;
  countries: Observable<any>;
  tourComps: Observable<any>;
  tourTypes: Observable<any>;
  startCities: Observable<any>;


  country: Country;
  startCity: StartCity;
  tourType: TourType;

  ngOnInit(){

  }

  goToUsers(){
    this.userService.getAll().subscribe(response=>{
      this.users = response;
    });
    this.isUsers = true;
    this.isArticles = false;
    this.isTours = false;
    this.isCountries = false;
    this.isStartCities = false;
    this.isTourTypes = false;
    this.isTourComps = false;
  }

  goToArticles(){
    this.articleService.getAll().subscribe(response =>{
      this.articles = response;
    })
    this.isUsers = false;
    this.isArticles = true;
    this.isTours = false;
    this.isCountries = false;
    this.isStartCities = false;
    this.isTourTypes = false;
    this.isTourComps = false;
  }

  goToTours(){
    this.tourService.getAll().subscribe(response =>{
      this.tours = response;
      console.log(response)
    })
    this.isUsers = false;
    this.isArticles = false;
    this.isTours = true;
    this.isCountries = false;
    this.isStartCities = false;
    this.isTourTypes = false;
    this.isTourComps = false;
  }

  goToTourComps(){
    this.tourCompService.getAll("undefined").subscribe(response =>{
      this.tourComps = response;
    })
    this.isUsers = false;
    this.isArticles = false;
    this.isTours = false;
    this.isCountries = false;
    this.isStartCities = false;
    this.isTourTypes = false;
    this.isTourComps = true;
  }

  goToContries(){
    this.countryService.getAll().subscribe(response =>{
      this.countries = response
    })
    this.isUsers = false;
    this.isArticles = false;
    this.isTours = false;
    this.isCountries = true;
    this.isStartCities = false;
    this.isTourTypes = false;
    this.isTourComps = false;
  }

  goToTourTypes(){
    this.tourTypeService.getAll().subscribe(response =>{
      this.tourTypes = response;
    })
    this.isUsers = false;
    this.isArticles = false;
    this.isTours = false;
    this.isCountries = false;
    this.isStartCities = false;
    this.isTourTypes = true;
    this.isTourComps = false;
  }

  goToStartCities(){
    this.startCityService.getAll().subscribe(response =>{
      this.startCities = response;
    })
    this.isUsers = false;
    this.isArticles = false;
    this.isTours = false;
    this.isCountries = false;
    this.isStartCities = true;
    this.isTourTypes = false;
    this.isTourComps = false;
  }


  countryName: string;
  addCountry(){
    this.country = new Country(this.countryName);
    this.countryService.add(this.country).subscribe();
    this.goToContries();
    this.goToContries();
    this.countryName = "";
  }

  tourTypeName: string;
   addTourType(){
    this.tourType = new TourType(this.tourTypeName);
    this.tourTypeService.add(this.tourType).subscribe();
    this.goToTourTypes();
     this.goToTourTypes();
    this.tourTypeName = "";
  }

  startCityName: string;
   addStartCity(){
    this.startCity = new StartCity(this.startCityName);
    this.startCityService.add(this.startCity).subscribe();
     this.goToStartCities();
     this.goToStartCities();
    this.startCityName = "";
  }

  deleteUser(id: number){
    this.userService.delete(id).subscribe();
    this.goToUsers();
    this.goToUsers();
  }

  deleteArticle(id: number){
    this.articleService.delete(id).subscribe();
    this.goToArticles();
    this.goToArticles();
  }

  deleteTour(id: number){
    this.tourService.delete(id).subscribe();
    this.goToTours();
    this.goToTours();
  }

  deleteTourComp(id: number){
    this.tourCompService.delete(id).subscribe();
    this.goToTourComps();
    this.goToTourComps();
  }

  deleteCountry(id: number){
    this.countryService.delete(id).subscribe();
    this.goToContries();
    this.goToContries();
  }

  deleteTourType(id: number){
    this.tourTypeService.delete(id).subscribe();
    this.goToTourTypes();
    this.goToTourTypes();
  }

  deleteStartCity(id: number){
    this.startCityService.delete(id).subscribe();
    this.goToStartCities();
    this.goToStartCities();
  }

}

