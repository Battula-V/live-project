import { Component } from '@angular/core';
import { StateExamService } from "../../state-exam.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ssc-exam',
  templateUrl: './ssc-exam.component.html',
  styleUrls: ['./ssc-exam.component.scss']
})
export class SscExamComponent {

  constructor(private stateExamServiceObj : StateExamService, private routerObj : Router){

    stateExamServiceObj.stateExamData.subscribe(
      (dataTwo : any) => {
        console.log(dataTwo.loginStatus);
        if(!dataTwo.loginStatus){
          routerObj.navigate(['/state-exams']);
        }
      }
    );

  }

 


}
