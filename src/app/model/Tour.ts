export class Tour {

  constructor(tourName: string, tourDecription: string, tourPrice: number, tourDuring: number, tourStart: string, tourEnd: string, tourPhoto: string, tourCompany: number, tourType: number, country: number, startCity: number) {
    this.tourName = tourName;
    this.tourDecription = tourDecription;
    this.tourPrice = tourPrice;
    this.tourDuring = tourDuring;
    this.tourStart = tourStart;
    this.tourEnd = tourEnd;
    this.tourPhoto = tourPhoto;
    this.tourCompany = tourCompany;
    this.tourType = tourType;
    this.country = country;
    this.startCity = startCity;
  }
    tourName: string;
    tourDecription: string;
    tourPrice: number;
    tourDuring : number;
    tourStart: string;
    tourEnd: string;
    tourPhoto: string;
    tourCompany : number;
    tourType : number;
    country : number;
    startCity : number;
}
