export class Comments{
  private  commentText : string;
  private  userLogin: string;
  private tourCompId: number;


  constructor(commentText: string, userLogin: string, tourCompId: number){
    this.commentText = commentText;
    this.userLogin = userLogin;
    this.tourCompId = tourCompId;
  }
}
