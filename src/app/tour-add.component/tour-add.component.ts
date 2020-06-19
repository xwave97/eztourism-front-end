import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../services/article-service.service';
import {Article} from "../model/Article";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {TourCompService} from "../services/tourcomp.service";
import {TourComp} from "../model/TourComp";
import {CountryService} from "../services/country.service";
import {StartCityService} from "../services/start-city.service";
import {TourService} from "../services/tour.service";
import {Observable} from "rxjs";
import {TourTypeService} from "../services/tour-type.service";
import {Tour} from "../model/Tour";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './tour-add.component.html',
  styleUrls:['./tour-add.component.css']
})
export class TourAddComponent implements OnInit{
  title = 'eztourism-front-end';
  text: string;

  tourName: string;
  tourPrice: number;
  tourDecription: string;
  tourStartDate: string;
  tourEndDate: string;
  tourDuring: number;
  tourCompId: number;
  countryId: number;
  startCityId: number;
  tourTypeId: number;

  countries: Observable<any>;
  startCities: Observable<any>;
  tourTypes: Observable<any>;
  tourComps: Observable<any>;

  tour: Tour;
  photo;
  constructor(private tourCompService: TourCompService,
              private countryService: CountryService,
              private startCityService: StartCityService,
              private tourService: TourService,
              private tourTypeService: TourTypeService,
              private route: Router){}

  ngOnInit(){
    this.tourCompService.getAll("undefined").subscribe(response=>{
      this.tourComps = response;
    });

    this.countryService.getAll().subscribe(response=>{
      this.countries = response;
    });

    this.startCityService.getAll().subscribe(response=>{
      this.startCities = response;
    });

    this.tourTypeService.getAll().subscribe(response=>{
      this.tourTypes = response;
    });
  }

  check(){
    console.log(typeof (this.photo));
  }


  save(){
    let help = this.photo.replace("C:\\fakepath\\", 'http://localhost:8080/pics/');
    console.log(help);

    this.currentFileUpload = this.selectedFiles.item(0)
    this.tourService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        // this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    })

    this.selectedFiles = undefined;
    this.tourDuring = Date.parse(this.tourEndDate) - Date.parse(this.tourStartDate);
    this.tourDuring = this.tourDuring/60/60/24/1000;
    console.log(this.tourDuring);
    // console.log(day+"."+month+"."+year);
    // this.tourDuring =  this.tourStartDate.getDate() - this.tourEndDate.getDate();
    // console.log(this.tourDuring);
     this.tour = new Tour(this.tourName, this.text, this.tourPrice, this.tourDuring, this.tourStartDate,
       this.tourEndDate, help, this.tourCompId, this.tourTypeId, this.countryId, this.startCityId);
    this.tourService.add(this.tour).subscribe();
    this.route.navigate(["adminhome"]);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


  selectedFiles: FileList
  currentFileUpload: File

}

