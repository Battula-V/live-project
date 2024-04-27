import { Component } from '@angular/core';
import { ActivatedRoute , Router } from "@angular/router";

@Component({
  selector: 'app-data-sharing-type-four',
  templateUrl: './data-sharing-type-four.component.html',
  styleUrls: ['./data-sharing-type-four.component.scss']
})
export class DataSharingTypeFourComponent {
  constructor(private routerObj : Router ,activatedRouteObj : ActivatedRoute){
    activatedRouteObj.data.subscribe(
      (gty : any) => {
        console.log(gty);
      }
    );
  }

}
