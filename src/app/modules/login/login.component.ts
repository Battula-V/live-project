import { Component } from '@angular/core'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from "../../modules/login/login.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginGroup = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email, Validators.maxLength(30)]),
    password : new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(10)])
  });

  constructor(private loginServiceObj:LoginService , private toastr: ToastrService){

  }
  
  login(){
    let dataOne=this.loginGroup.value;
    console.log(typeof(dataOne));
    console.log(dataOne);
    console.log(dataOne.email);
    console.log(dataOne.password);
    this.loginServiceObj.login(dataOne.email , dataOne.password).subscribe(
      (res:any)=>{
        console.log(res);        
        this.toastr.error("LoginSuccess","Success");
      },
      (error:any)=>{
        console.log(error);        
        this.toastr.error("LoginFailed", "Failed");
      }
    );
  }

}
