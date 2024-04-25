import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  behaviorSubjectObj = new BehaviorSubject({name:"abbas"});
  applicationData = this.behaviorSubjectObj.asObservable();
  constructor() { }
}
