import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {

  addDepartmentForm = new FormGroup({
    departmentName : new FormControl('',[Validators.required]),
    // name :new FormControl('',[Validators.required])
    status : new FormControl('',[Validators.required])
  })

  submit(){
    let EmployeeStore=this.addDepartmentForm.value;
    console.log(EmployeeStore);
  }

}
