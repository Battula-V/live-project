import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-data-sharing-type-four',
  templateUrl: './data-sharing-type-four.component.html',
  styleUrls: ['./data-sharing-type-four.component.scss']
})
export class DataSharingTypeFourComponent {
  code1 = `{
    path:"abc/:salary",
    component:your component name,
    data : { name:ramu , salary :1200}
}`;

code2 = `<a routerLink="abc/1200">click me </a>`;

code3 = `this.activatedRouteObj.data.subscribe(
  (dataOne : any) => {
    console.log(dataOne);
  }
);`;

code4 = `{ name:ramu , salary :1200}`;

constructor(activatedRouteObj : ActivatedRoute){
    activatedRouteObj.data.subscribe(
      (dataOne : any) => {
        console.log(dataOne);
      }
    );
}
}
