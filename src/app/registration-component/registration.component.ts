import {Component, OnInit} from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { User } from '../model/User';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {AuthDTO} from "../dto/AuthDTO";

@Component({
  selector: 'app-root',
  templateUrl: './registration.component.html',
  styleUrls:['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    title = 'eztourism-front-end';

    login: string;
    password: string;
    email: string;
    user: User;
    authUser: AuthDTO;
    isAuth = false;
    isReg = true;
  checkAuthValid= "фвывфыв";

    checkValid: number;
    constructor(private service: RegistrationService,
                private cookieService: CookieService,
                private route: Router,){}

    ngOnInit() {
      console.log(this.checkAuthValid + " ааааа");
    }


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
      this.login = "";
      this.password = "";
      this.email = "";
    }

    goReg(){
      this.isReg = true;
      this.isAuth = false;
      this.login = "";
      this.password = "";
      this.email = "";
    }

    loginAuth: string;
    passwordAuth: string;

    auth(){
        this.authUser = new AuthDTO(this.loginAuth,this.passwordAuth);
        this.service.auth(this.authUser).subscribe(response =>{
            this.checkAuthValid = response;
            if(this.checkAuthValid != null){
              this.user = response;
              this.cookieService.set("userName", this.user.userName);
              location.href = "/";
              this.route.navigate(["/"]);
            }
        })
    }
}

