import { Component } from '@angular/core';
import {Router } from "@angular/router";
@Component({
  selector: 'app-online-exam',
  templateUrl: './online-exam.component.html',
  styleUrls: ['./online-exam.component.scss']
})
export class OnlineExamComponent {

  isShowMenuBar = false;

  constructor(private routerObj : Router){

  }

  folders: any[] = [
    {
      name: 'Eamcet Exam',
      path : "online-exams/eamcet-exam"
    },
    {
      name: 'Jntu Exam',
      path : "online-exams/jntu-exam"
    } 
  ];
   

  user(param1 :any){
    this.routerObj.navigate([param1]);
    this.isShowMenuBar = false;
  }

  menuClick(){
    this.isShowMenuBar = true;
  }

  closeButton(){
    this.isShowMenuBar = false;
  }
}
