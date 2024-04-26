import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-data-sharing-type-three',
  templateUrl: './data-sharing-type-three.component.html',
  styleUrls: ['./data-sharing-type-three.component.scss']
})
export class DataSharingTypeThreeComponent implements OnInit{
      constructor(private activatedRouteObj : ActivatedRoute , private routerObj : Router){
          activatedRouteObj.queryParams.subscribe(
            (venky : any) => {
              console.log(venky);
            }
          );
      }
  ngOnInit(): void {
    this.activatedRouteObj.params.subscribe(
      (venky : any) => {
        console.log(venky);
      }
    );
  }
}
