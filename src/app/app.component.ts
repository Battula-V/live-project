import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  villageName="done";
  friendName="ramu";
  title = 'ui';
  userName(event:any){
    console.log(event);
  }

  updateUser(event:any){
     
    console.log(event);
  }

  updateVillageName(event:any){
    this.villageName="pdrl";
    console.log(event);
  }
}
