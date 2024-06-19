import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  addEmployeeForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    phoneNumber : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),

  })

  submit(){
    let superAdminStore=this.addEmployeeForm.value;
    console.log(superAdminStore);
  }

}
