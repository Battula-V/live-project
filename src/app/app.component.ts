import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fatherName="srinu";
  title = 'ui';  
  name="ramu";
  userName(event:any){
    console.log(event);
  }

  superName="yash";
  akbar(event:any){
    console.log(event);
  }

  villageName(event:any){
    console.log(event);
  }
}
