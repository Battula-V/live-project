import { Component } from '@angular/core';
import { HomeService } from "../../home.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  restaurants:Array<any>=
  [
     
];
constructor(home:HomeService){
  this.restaurants=home.restaurants;
  console.log(this.restaurants);
}
}
