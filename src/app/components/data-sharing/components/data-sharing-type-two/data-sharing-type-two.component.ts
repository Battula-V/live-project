import { Component } from '@angular/core';

@Component({
  selector: 'app-data-sharing-type-two',
  templateUrl: './data-sharing-type-two.component.html',
  styleUrls: ['./data-sharing-type-two.component.scss']
})
export class DataSharingTypeTwoComponent {
  code1 = `behaviorSubjectObj = new BehaviorSubject({});`;
  code2 = `observeSubjectData(inputData:any){

      this.behaviorSubjectObj.next(inputData);

  }`;
  code3 = `import { serviceClassName } 'service file'`;
  code4 =` constructor( private serviceClassNameObj : serviceClassName ){
    this.serviceClassNameObj.applicationData.subscribe(
        (variableOne:any) => {
            console.log(variableOne);
        }
    );
}`;
}
