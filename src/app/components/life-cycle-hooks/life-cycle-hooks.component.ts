import { Component, OnInit } from '@angular/core';
import { DataSharingService } from "../data-sharing/data-sharing.service";
@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
export class LifeCycleHooksComponent implements OnInit{
  ngOnInit(): void {
     
  }
  name="ramu";
  userName(){
    this.name="akash";
  }

  constructor(private dataSharingServiceObj : DataSharingService){
      this.dataSharingServiceObj.applicationData.subscribe(
        ( bg : any) => {
          console.log(bg);
        }
      );
  }
}
