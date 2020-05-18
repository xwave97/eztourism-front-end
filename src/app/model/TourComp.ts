export class TourComp{

  tourCompName: string;
  tourCompLikes: number;
  tourCompDislikes: number;
  tourCompAdress: string;
  tourCompUrl: string;
  tourCompPhoto: string;
  tourCompDecription: string;

  constructor(tourCompName: string, tourCompLikes: number,  tourCompDisLikes: number, tourCompAdress: string, tourCompUrl: string, tourCompPhoto: string, tourCompDecription: string){
    this.tourCompName = tourCompName;
    this.tourCompLikes = tourCompLikes
    this.tourCompDislikes = tourCompDisLikes;
    this.tourCompAdress = tourCompAdress;
    this.tourCompUrl = tourCompUrl;
    this.tourCompPhoto = tourCompPhoto;
    this.tourCompDecription = tourCompDecription
  }
}
