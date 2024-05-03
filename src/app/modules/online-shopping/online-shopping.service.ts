import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OnlineShoppingService {

  behaviorSubjectObj = new BehaviorSubject({});
  onlineShoppingData = this.behaviorSubjectObj.asObservable();

  constructor() { }

  observeSubjectData(dataOne : any){
    this.behaviorSubjectObj.next(dataOne);
  }
}
