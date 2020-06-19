import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {TourCompService} from '../services/tourcomp.service';
import {Observable} from 'rxjs';
import {DataService} from '../services/date-service.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {TourService} from "../services/tour.service";
import {StartCityService} from "../services/start-city.service";
import {TourTypeService} from "../services/tour-type.service";
import {FilterDTO} from "../dto/FilterDTO";
import {CountryService} from "../services/country.service";

@Component({
  selector: 'app-root',
  templateUrl: './tours.component.html',
  styleUrls:['./tours.component.css']
})
export class ToursComponent implements OnInit{

  constructor(private service: TourCompService,
              private route: Router,
              private cookieService: CookieService,
              private tourService: TourService,
              private startCityService: StartCityService,
              private tourTypeService: TourTypeService,
              private countryService: CountryService,){}

  tours: Observable<any>;
  countries: Observable<any>;
  tourTypes: Observable<any>;
  startCities: Observable<any>;
  startCityId: number;
  tourTypeId: number;
  countryId: number;
  price: number;
  during: number;
  date: string;
  filter: FilterDTO;

  ngOnInit(){
    this.countryId = +this.cookieService.get("countryId");
    if(this.countryId == 0){
      this.countryId = undefined;
    }
    this.loadContent();
    this.cookieService.delete("countryId");
  }

  loadContent(){
    console.log(this.countryId);
    console.log(this.date);
    if (this.during+"" == "")
      this.during = undefined;
    this.filter = new FilterDTO(this.startCityId,this.tourTypeId,this.countryId, this.price, this.during, this.date)
    if(this.filter.cityStartId == undefined && this.filter.tourTypeId == undefined && this.filter.countryId == undefined &&this.filter.price == undefined &&(this.filter.during == undefined )){
      this.tourService.getAll().subscribe(response=>{
        this.tours = response;
      });
    }else {
    this.tourService.getByFilters(this.filter).subscribe(response=>{
        this.tours = response;
      });
    }
    this.countryService.getAll().subscribe(response=>{
      this.countries = response;
    });
    this.tourTypeService.getAll().subscribe(response=>{
      this.tourTypes = response;
    });
    this.startCityService.getAll().subscribe(response =>{
      this.startCities = response;
    });

    this.cookieService.delete("countryId");
  }


  clear(){
    location.href = "tours";
  }


}

