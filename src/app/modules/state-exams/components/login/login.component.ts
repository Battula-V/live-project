import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { StateExamService } from "../../state-exam.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private routerObj : Router, private stateExamServiceObj : StateExamService){

      this.stateExamServiceObj.stateExamData.subscribe(
        (param : any) => {
          console.log(param);

          if(param){
            console.log(true);
          }

          else{
            console.log(false);
          }
        }
       
      );

  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  login(){
    this.stateExamServiceObj.apicalling();
    this.stateExamServiceObj.observeSubjectData({loginStatus :  true});
    this.routerObj.navigate(['/state-exams/ssc-exam']);
  }
}
