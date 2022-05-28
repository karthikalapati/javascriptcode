import { Component, OnInit } from '@angular/core';
import {RestapisService} from '../../restapis.service'
@Component({
  selector: 'app-cusdetail',
  templateUrl: './cusdetail.component.html',
  styleUrls: ['./cusdetail.component.css']
})
export class CusdetailComponent implements OnInit {

  constructor(private rest:RestapisService) { }

  ngOnInit(): void {
    console.log(this.rest.user);
  }

}
