import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-state-exams',
  templateUrl: './state-exams.component.html',
  styleUrls: ['./state-exams.component.scss']
})
export class StateExamsComponent {

  folders: any[] = [
    {
      name: 'ssc-exam',
      path : "/state-exams/ssc-exam"
    },
    {
      name: 'ipe-exam',
      path : '/state-exams/ipe-exam'
    },
    {
      name: 'polycet-exam',
      path : '/state-exams/polycet-exam'
    }
  ];

  isShowMenuBar = false;

  constructor(private routerObj : Router){

  }

  user(ssc : any){
    this.routerObj.navigate([ssc]);
    this.isShowMenuBar= false;
  }

  menuClick(){
    this.isShowMenuBar = true;
  }

  closeButton(){
    this.isShowMenuBar = false;
  }

}
