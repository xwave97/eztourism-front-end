import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../services/article-service.service';
import {Article} from "../model/Article";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {TourCompService} from "../services/tourcomp.service";
import {TourComp} from "../model/TourComp";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './tour-comp-add.component.html',
  styleUrls:['./tour-comp-add.component.css']
})
export class AddTourCompComponent implements OnInit{
  title = 'eztourism-front-end';
  text: string;

  tourCompName: string;
  tourCompAdress: string;
  tourCompUrl: string;

  tourComp: TourComp;
  photo;
  constructor(private tourCompService: TourCompService,
              private route: Router){}

  ngOnInit(){
  }

  check(){
    console.log(typeof (this.photo));
  }


  save(){
    let help = this.photo.replace("C:\\fakepath\\", 'http://localhost:8080/pics/');
    console.log(help);

    this.currentFileUpload = this.selectedFiles.item(0)
    this.tourCompService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        // this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    })

    this.selectedFiles = undefined
    this.tourComp = new TourComp(this.tourCompName, 0,0, this.tourCompAdress, this.tourCompUrl,help, this.text);
    this.tourCompService.add(this.tourComp).subscribe();
    this.route.navigate(["adminhome"]);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


  selectedFiles: FileList
  currentFileUpload: File

}

