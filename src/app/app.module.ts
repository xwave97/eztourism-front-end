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
import {BlogComponent} from "./blog/blog.component";
import {BlogSingleComponent} from "./blog-single-component/blog-single-component";
import {ToursComponent} from "./tour-component/tours.component";
import {AddBlogComponent} from "./blog-add.component/blog-add.component";
import {AdminHomeComponent} from "./admin-home-component/admin-home.component";
import {AddTourCompComponent} from "./tour-comp-add-component/tour-comp-add.component";
import {TourAddComponent} from "./tour-add.component/tour-add.component";
import {ContactComponent} from "./contact-component/contact.component";

const appRoutes: Routes =[
  {path: 'reg', component: RegistrationComponent},
  {path: '', component: HomeComponent},
  {path: 'tourComps', component: TourCompsComponent},
  {path: 'singleTourComp', component: TourCompSingleComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'singleblog', component: BlogSingleComponent},
  {path: 'tours', component: ToursComponent},
  {path:'addblog', component: AddBlogComponent},
  {path: 'adminhome', component: AdminHomeComponent},
  {path: 'addtourcomp', component: AddTourCompComponent},
  {path: 'addtour', component: TourAddComponent},
  {path: 'contact', component: ContactComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    TourCompsComponent,
    TourCompSingleComponent,
    BlogComponent,
    BlogSingleComponent,
    ToursComponent,
    AddBlogComponent,
    AdminHomeComponent,
    AddTourCompComponent,
    TourAddComponent,
    ContactComponent,
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
