import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  behaviorSubjectObj = new BehaviorSubject({name : "vasu"});
  applicationData =this.behaviorSubjectObj.asObservable();
  constructor() { }
  observeSubjectData(input:any){
    this.behaviorSubjectObj.next(input);
  }
}
