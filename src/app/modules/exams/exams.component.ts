import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent {

  isShowMenuBar = false;

  constructor(private routerObj : Router){}

  user(exam : any){
    this.routerObj.navigate([exam]);
  }

  menuClick(){
    this.isShowMenuBar = true;
  }

  closeButton(){
    this.isShowMenuBar = false;
  }

}
