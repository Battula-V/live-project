import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-data-sharing-type-three',
  templateUrl: './data-sharing-type-three.component.html',
  styleUrls: ['./data-sharing-type-three.component.scss']
})
export class DataSharingTypeThreeComponent implements OnInit{
    code1 = `{
      path:"abc/:salary",
      component:your component name
  }`;

  code2 = `<a routerLink="abc/1200">click me </a>`;

  code3 = `this.activatedRouteObj.params.subscribe(
    (data : any) => {
      console.log(data);
    }
  );`;

  code4 = `<a routerLink="abc?salary=1200">click me </a>`;

  code5 = `this.activatedRouteObj.queryParams.subscribe(
    (data : any) => {
      console.log(data);
    }
  );`;

  code6 = `{
    path:"abc",
    component:your component name
}`;

    constructor( private routerObj : Router , private activatedRouteObj : ActivatedRoute){
      activatedRouteObj.queryParams.subscribe(
        (data : any) => {
          console.log(data);
        }
      );
    }
  ngOnInit(): void {
    this.activatedRouteObj.params.subscribe(
      (data : any) => {
        console.log(data);
      }
    );
  }
}
