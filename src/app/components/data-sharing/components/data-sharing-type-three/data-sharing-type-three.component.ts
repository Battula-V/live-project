import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-data-sharing-type-three',
  templateUrl: './data-sharing-type-three.component.html',
  styleUrls: ['./data-sharing-type-three.component.scss']
})
export class DataSharingTypeThreeComponent implements OnInit{

  constructor(private activateRouteObj : ActivatedRoute , routerObj : Router){
      activateRouteObj.queryParams.subscribe(
        (dataOne : any) => {
          console.log(dataOne);
        }
      );
  }
  ngOnInit(): void {
    this.activateRouteObj.params.subscribe(
      (dataOne : any) => {
        console.log(dataOne);
      }
    );
  }

}
