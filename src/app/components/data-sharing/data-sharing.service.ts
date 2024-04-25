import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  
  behaviorSubjectObj = new BehaviorSubject({name:"suresh"});
  applicationData = this.behaviorSubjectObj.asObservable();


  constructor() { }
  
  observeSubjectData(inputData:any){

    this.behaviorSubjectObj.next(inputData);

  }
}
