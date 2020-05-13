import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { User } from '../model/User';

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

    checkValid: number;
    constructor(private service: RegistrationService){}

    save(){
        this.user = new User(this.login, this.email, this.password);
        this.service.add(this.user).subscribe(response =>{
          this.checkValid = response;
        });
    }
}

