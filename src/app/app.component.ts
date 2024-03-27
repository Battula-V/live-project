import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'swiggy';
  backEndUrl="http://localhost/my-project/back-end/";
  backEndResponse="";
  constructor(private http:HttpClient){
    
  }
  ngOnInit(): void {
    // this.http.get(this.backEndUrl).subscribe(
    //   (response:any)=>{
    //     console.log(response);
    //     this.backEndResponse=response;
      //}
    //);
  }
}
