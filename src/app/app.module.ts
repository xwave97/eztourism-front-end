import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { RegistrationComponent } from './registration-component/registration.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from './home-component/home.component';
import {TourCompsComponent} from './tour-comps-component/tour-comps.component';
import {TourCompSingleComponent} from './tour-comp-single-component/tour-comp-single.component';
import {CookieService} from 'ngx-cookie-service';

const appRoutes: Routes =[
  {path: 'reg', component: RegistrationComponent},
  {path: '', component: HomeComponent},
  {path: 'tourComps', component: TourCompsComponent},
  {path: 'singleTourComp', component: TourCompSingleComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    TourCompsComponent,
    TourCompSingleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
