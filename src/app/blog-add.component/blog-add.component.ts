import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../services/article-service.service';
import {Article} from "../model/Article";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './blog-add.component.html',
  styleUrls:['./blog-add.component.css']
})
export class AddBlogComponent implements OnInit{
  title = 'eztourism-front-end';
  text: string;
  header: string;

  article: Article;
  photo;
  constructor(private articleService: ArticleService,
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
    this.articleService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    })

    this.selectedFiles = undefined
    this.article = new Article(this.header, this.text, 0,0, help);
    this.articleService.add(this.article).subscribe();
    this.route.navigate(["adminhome"]);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }
  upload() {
    this.progress.percentage = 0;

  }


}

