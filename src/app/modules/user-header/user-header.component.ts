import { Component } from '@angular/core';

@Component({
  selector: 'app-user-header', 
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent {
  showLogin:boolean=false;
  showSignUp:boolean=false;
  closeLoginPopup(status:any){
    this.showSignUp=false;
    this.showLogin=status==='true';
  }
  closeSignUpPopup(status:any){
    this.showSignUp=status==='true';
    this.showLogin=!this.showSignUp;
  }
}
