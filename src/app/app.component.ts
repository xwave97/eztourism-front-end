import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {strict} from "assert";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'eztourism-front-end';

  constructor(private cookieService: CookieService,
              private route: Router) {
  }

  userName: string;

  ngOnInit(){
    this.userName = this.cookieService.get("userName");
  }


  deleteCookie(){
    this.cookieService.delete("userName");
    location.reload();
  }

  countryId: number;
  value: string;
  searchEgypt(){
    this.cookieService.set("countryId",7+"");
    console.log(this.cookieService.get("countryId"));
    this.route.navigate(["/tours"]);
  }


  searchBulgaria(){
    this.cookieService.set("countryId", 4+"");
    console.log(this.cookieService.get("countryId"));
    this.route.navigate(["/tours"]);
  }

  searchTurkey(){
    this.cookieService.set("countryId", 5+"");
    console.log(this.cookieService.get("countryId"));
    this.route.navigate(["/tours"]);
  }
}
