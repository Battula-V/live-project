import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-data-sharing-type-four',
  templateUrl: './data-sharing-type-four.component.html',
  styleUrls: ['./data-sharing-type-four.component.scss']
})
export class DataSharingTypeFourComponent {
     constructor(private activatedRouteObj : ActivatedRoute){
        activatedRouteObj.data.subscribe(
          (dataTwo : any) => {
            console.log(dataTwo);
          }
        );
     }
}
