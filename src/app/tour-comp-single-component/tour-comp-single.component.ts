import {Component, OnInit} from '@angular/core';
import {TourCompService} from '../services/tourcomp.service';
import {Observable} from 'rxjs';
import {DataService} from '../services/date-service.service';
import {CookieService} from 'ngx-cookie-service';
import {TourComp} from '../model/TourComp';
import {CommentsService} from "../services/comments-service.service";
import {Comments} from "../model/Comment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './tour-comp-single.component.html',
  styleUrls:['./tour-comp-single.component.scss']
})
export class TourCompSingleComponent implements OnInit{
  title = 'eztourism-front-end';



  constructor(private service: TourCompService,
              private dataService: DataService,
              private commentService: CommentsService,
              private cookieService: CookieService,
              private route: Router){}

  id: number;
  comments: Observable<any>;
  tourComps: Observable<any>;
  tourCompany: TourComp;
  isDecription: boolean;
  isComments: boolean;
  comment: Comments;
  commentText: string;


  ngOnInit(){
    this.loadCompany();
  }

  loadCompany(){
    this.isComments = false;
    this.isDecription = true;
    this.id = +this.cookieService.get("tourCompId");
    this.service.getSingle(this.id).subscribe(response =>{
      this.tourCompany = response;
    });
    this.commentService.getAll(this.id).subscribe(response =>{
      this.comments = response;
      console.log(response)
    })
  }

  isPressed = true;
  pressLike(){
    this.isPressed = false;
    this.service.pressLike(1).subscribe(()=>{
      this.loadCompany();
    });
  }

  pressDislike(){
    this.service.pressDislike(1).subscribe(()=>{
      this.loadCompany();
    });
  }

  showComments(){
    this.isComments = true;
    this.isDecription = false;
  }

  showDecription(){
    this.isComments = false;
    this.isDecription = true;
  }

  add(){
    if(!this.cookieService.get("userName")){
      this.route.navigate(["/reg"]);
      return;
    }
    let tourCompId = this.id;
    let user = this.cookieService.get("userName");
    this.comment = new Comments(this.commentText, user , tourCompId);
    this.commentService.add(this.comment).subscribe();
    console.log(this.comment)
    this.loadCompany();
    this.loadCompany();
    this.isComments = true;
    this.isDecription = false;
  }
}


