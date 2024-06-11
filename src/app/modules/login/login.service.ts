import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClientObj:HttpClient) { }

  callingApi(){
    this.httpClientObj.get("http://127.0.0.1:8000/api/get-user").subscribe(
      (res:any)=>{
        console.log(res);
      }
    );
  }
}
