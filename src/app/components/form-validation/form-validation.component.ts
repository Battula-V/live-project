import { Component } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent {

  code2=`<form [formGroup]="loginGroup">
    <input matInput placeholder="Email" formControlName="email">
  </form>`;

code3=`  loginGroup = new FormGroup({
email : new FormControl('',[Validators.required, Validators.email, Validators.maxLength(30)]),
password : new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(10)])
});
`;

code4=`
  <button type="submit" mat-raised-button color="primary" [disabled]="loginGroup.invalid">Login</button>
`;

}
