import { Component, OnInit } from '@angular/core';
import { DataSharingService } from "../data-sharing/data-sharing.service";
@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit{
  
  address : string = "guntur";
  rollNumber : number = 123;
  is_office : boolean = true;
  are_students : boolean = false;
  ngOnInit(): void {
    let userName = "venky";
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    

  }

  constructor(private dataSharingServiceObj : DataSharingService){
    this.dataSharingServiceObj.applicationData.subscribe(
      (one : any) => {
        console.log(one);
      }
    );
    dataSharingServiceObj.observeSubjectData({name : "ganga"});
  }


}
