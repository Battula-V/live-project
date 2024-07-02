import { Component } from '@angular/core';

@Component({
  selector: 'app-calling-get-api',
  templateUrl: './calling-get-api.component.html',
  styleUrls: ['./calling-get-api.component.scss']
})
export class CallingGetApiComponent {

  code1=`
    <div fxLayout="row" fxLayoutAlign="center" fxFlex="100">              
                        <button type="submit" mat-raised-button color="primary" fxFlex="50" [disabled]="loginGroup.invalid" (click)="login()" class="mt-2 mb-2">Login</button>       
    </div> 
  `;

  code2=`
    login(){
    let loginGroupStore=this.loginGroup.value;
    console.log(typeof(loginGroupStore))
    console.log(loginGroupStore);
    console.log(loginGroupStore.email);
    console.log(loginGroupStore.password);
    this.loginServiceObj.login(loginGroupStore.email, loginGroupStore.password).subscribe(
      (res:any)=>{
        console.log(res);
      }
    );
  }
  `;

  code3=`    
    import { HttpClient } from "@angular/common/http";
  `;

  code4=`
      constructor(private httpClientObj:HttpClient) {

   }
  `;

  code5=`
      login(email:any, password:any){
    return this.httpClientObj.get(url postman?email=$objects in email&password=$objects in password);
   }
  `;

}
