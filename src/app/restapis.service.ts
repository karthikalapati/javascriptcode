import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapisService {
  user = [
    {No:101, Name:'Karthik', Group:'Developer'},
    {No:102, Name:'NTR', Group:'Actor'},
    {No:103, Name:'Vijay Karnick', Group:'Army'},
    {No:104, Name:'PuriJaganath', Group:'Director'},
    {No:105, Name:'Gundeep', Group:'Developer'},
    {No:106, Name:'Surya', Group:'Actor'},
    {No:107, Name:'Karthi', Group:'Actor'},
    {No:108, Name:'Shanu', Group:'Youtuber'},
    {No:109, Name:'Jagadish', Group:'Business'},
    {No:110, Name:'Yuvaraj', Group:'Cricketer'},
    {No:111, Name:'Eon Mask', Group:'Business'}
  ]
  constructor() { }
  ngOnInit() {

  }
}
