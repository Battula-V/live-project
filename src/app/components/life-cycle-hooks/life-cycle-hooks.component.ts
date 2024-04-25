import { Component } from '@angular/core';
import { DataSharingService } from "../data-sharing/data-sharing.service";
@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
export class LifeCycleHooksComponent {
  name="rabbani";
  user(){
    this.name="bhanu";
  }
  constructor( private dataSharingServiceObj : DataSharingService){
    this.dataSharingServiceObj.applicationData.subscribe(
      (store : any) => {
        console.log(store);
      }
    );
  }

}
