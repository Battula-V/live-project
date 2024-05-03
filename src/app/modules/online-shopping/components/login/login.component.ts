import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { OnlineShoppingService } from "../../online-shopping.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private routerObj : Router , private onlineShoppingServiceObj : OnlineShoppingService){

    onlineShoppingServiceObj.onlineShoppingData.subscribe(
      (dataTwo : any) => {
        console.log(dataTwo);
        if(dataTwo){
          console.log(true);
        }
        else{
          console.log(false);
        }
      }
    );

  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  login(){
    this.onlineShoppingServiceObj.observeSubjectData({loginStatus : true});
    this.routerObj.navigate(['/online-shopping/books']);
  }

}
