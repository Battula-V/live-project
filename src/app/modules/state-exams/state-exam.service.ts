import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StateExamService {

  behaviorsubjectObj = new BehaviorSubject({});
  stateExamData = this.behaviorsubjectObj.asObservable();

  constructor(private httpClientObj : HttpClient) {

   }

  observeSubjectData(dataOne : any){
    this.behaviorsubjectObj.next(dataOne);
  }

  apicalling(){
    this.httpClientObj.get("http://localhost:4200/assets/api-data/login.json").subscribe(
      (datatwo : any) => {
        console.log(datatwo);
      }
    );
  }

}
