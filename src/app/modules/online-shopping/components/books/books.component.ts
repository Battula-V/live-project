import { Component } from '@angular/core';
import { OnlineShoppingService } from "../../online-shopping.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

constructor(private onlineShoppingServiceObj : OnlineShoppingService , private routerObj : Router){
  onlineShoppingServiceObj.onlineShoppingData.subscribe(
    (dataThree : any) => {
      console.log(dataThree.loginStatus);
      if(!dataThree.loginStatus){
        routerObj.navigate(['/online-shopping'])
      }
    }
  );
}

}
