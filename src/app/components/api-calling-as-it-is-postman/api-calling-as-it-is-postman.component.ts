import { Component } from '@angular/core';

@Component({
  selector: 'app-api-calling-as-it-is-postman',
  templateUrl: './api-calling-as-it-is-postman.component.html',
  styleUrls: ['./api-calling-as-it-is-postman.component.scss']
})
export class ApiCallingAsItIsPostmanComponent {

  code1=`departmentAddApi(body:any){
    return this.httpClientObj.post("http://127.0.0.1:8000/api/add-department",body);
  }`;

  code2=`
  submit(){
    let addDepartmentFormStore = this.addDepartmentForm.value;
    console.log(addDepartmentFormStore);
    let departmentAdd={"department":addDepartmentFormStore.departmentName,
                       "Status":addDepartmentFormStore.status
                      };
    this.homeServiceObj.departmentAddApi(departmentAdd).subscribe(
      (response:any)=>{
        console.log(response); 
      }
       
    );
  }`;

  code4=`
    import { HomeService } from "../../home.service";
  `;

  code5=`
     constructor(private homeServiceObj:HomeService){

  }
  `;
}
