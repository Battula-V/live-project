import { Component } from '@angular/core';
import { DataSharingService } from "../data-sharing/data-sharing.service";
@Component({
  selector: 'app-object-variable',
  templateUrl: './object-variable.component.html',
  styleUrls: ['./object-variable.component.scss']
})
export class ObjectVariableComponent {
  myFriends={ friend2:"somu" , friend3:"akbar" ,friend1:"ramu"}
  constructor(private dataSharingServiceObj : DataSharingService){
      this.dataSharingServiceObj.applicationData.subscribe(
        ( va:any) => {
          console.log(va);
        }
      );
  }

}
