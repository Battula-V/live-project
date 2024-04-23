import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  officeName="bullion";
  title = 'ui';
  userName(event:any){
    console.log(event);
  }
}
