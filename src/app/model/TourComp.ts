export class TourComp{

  tourCompName: string;
  tourCompRate: number;
  tourCompAdress: string;
  tourCompUrl: string;
  tourCompPhoto: string;
  tourCompDecription: string;

  constructor(tourCompName: string, tourCompRate: number, tourCompAdress: string, tourCompUrl: string, tourCompPhoto: string, tourCompDecription: string){
    this.tourCompName = tourCompName;
    this.tourCompRate = tourCompRate;
    this.tourCompAdress = tourCompAdress;
    this.tourCompUrl = tourCompUrl;
    this.tourCompPhoto = tourCompPhoto;
    this.tourCompDecription = tourCompDecription
  }
}
