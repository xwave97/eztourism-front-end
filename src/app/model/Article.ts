export class Article{
   articleId: number;
    articleHeader: string;
    articleText: string;
    articleLikes: number;
    articleDislikes: number;
    articlePhoto: string;


  constructor( articleHeader: string, articleText: string, articleLikes: number, articleDislikes: number, articlePhoto: string){
    this.articleHeader = articleHeader;
    this.articleText = articleText;
    this.articleLikes = articleLikes;
    this.articleDislikes = articleDislikes;
    this.articlePhoto = articlePhoto;
  }
}
