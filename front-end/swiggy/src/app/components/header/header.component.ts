import { Component, OnInit } from '@angular/core';
import { HomeService } from "../../home.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  restaurants:Array<any>=[];

  constructor(home:HomeService) {
    this.restaurants=home.restaurants;
    console.log(this.restaurants);
   }

  ngOnInit(): void {
  }

}
