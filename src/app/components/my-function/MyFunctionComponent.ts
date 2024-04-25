import { Component, OnInit } from '@angular/core';
import { DataSharingService } from "../data-sharing/data-sharing.service";

@Component({
  selector: 'app-my-function',
  templateUrl: './my-function.component.html',
  styleUrls: ['./my-function.component.scss']
})
export class MyFunctionComponent implements OnInit {
  adress:string="guntur";
  rollNuber:number=12;
  is_office:boolean=true;
  name:Array<string>=["somu","akbar"];
  friends:Array<string>=["akbar","somu"];
  relatives={friend1:"somu", friend2:"akbar"};
  relatives1={friend2:"akbar" , friend1:"somu"};
  constructor(private dataSharingServiceObj : DataSharingService){
    dataSharingServiceObj.applicationData.subscribe(
      (venky:any) => {
        console.log(venky);
      }
    );
    this.searchArray();
  }
  searchArray(){
    console.log("we are using search array");
  }
  ngOnInit(): void {
    let userName="Ramu dondla";
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
  }
  
  
}
