import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { User } from '../model/User';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './registration.component.html',
  styleUrls:['./registration.component.css']
})
export class RegistrationComponent {
    title = 'eztourism-front-end';

    login: string;
    password: string;
    email: string;
    user: User;
    isAuth = false;
    isReg = true

    checkValid: number;
    constructor(private service: RegistrationService,
                private cookieService: CookieService,
                private route: Router,){}

    save(){
        this.user = new User(this.login, this.email, this.password);
        this.service.add(this.user).subscribe(response =>{
          this.checkValid = response;
          if(this.checkValid === 0){
            this.cookieService.set("userName", this.user.userName);
            location.href = "/";
            this.route.navigate(["/"]);
          }
        });
    }

    goAuth(){
      this.isAuth = true;
      this.isReg = false;
    }

    goReg(){
      this.isReg = true;
      this.isAuth = false;
    }}
    
