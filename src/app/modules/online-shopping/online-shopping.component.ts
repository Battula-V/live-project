import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-online-shopping',
  templateUrl: './online-shopping.component.html',
  styleUrls: ['./online-shopping.component.scss']
})
export class OnlineShoppingComponent {


  folders: any[] = [
    {
      name: 'Book',
      path :  '/online-shopping/books'
    },
    {
      name: 'Dresses',
      path : '/online-shopping/dresses'
    },
    {
      name: 'Vehicles', 
      path : '/online-shopping/vehicles'
    },
  ];

  isShowMenuBar = false;

  constructor( private routerObj : Router){  }

   user(book : any){
    this.routerObj.navigate([book]);
    this.isShowMenuBar = false;
   }

   menuClick(){
    this.isShowMenuBar = true;
   }

   closeButton(){
    this.isShowMenuBar = false
   }

}
