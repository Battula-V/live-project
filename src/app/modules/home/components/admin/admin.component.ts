import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  addAdminForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    phoneNumber : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),

  })

  submit(){
    let AdminStore=this.addAdminForm.value;
    console.log(AdminStore);
  }
}
