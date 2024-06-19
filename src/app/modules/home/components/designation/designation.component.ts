import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent {

  addDesignationForm = new FormGroup({
    designationName : new FormControl('',[Validators.required])
     
  })

  submit(){
    let DesignationStore=this.addDesignationForm.value;
    console.log(DesignationStore);
  }

}
