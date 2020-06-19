export class FilterDTO{
  cityStartId: number;
  tourTypeId: number;
  countryId: number;
  price: number;
  during: number;
  date: string;


  constructor( cityStartId: number,tourTypeId: number, countryId: number, price: number, during: number, date: string){
    this.cityStartId = cityStartId;
    this.tourTypeId = tourTypeId;
    this.countryId = countryId;
    this.price = price;
    this.during = during
    this.date = date
  }
}
