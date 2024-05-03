import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class StateExamService {

  behaviorsubjectObj = new BehaviorSubject({});
  stateExamData = this.behaviorsubjectObj.asObservable();

  constructor() { }

  observeSubjectData(dataOne : any){
    this.behaviorsubjectObj.next(dataOne);
  }

}
