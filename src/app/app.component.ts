import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'swiggy';
  backEndUrl="http://localhost/con-1/back-end/";
  backEndResponse="";
  constructor(private https:HttpClient){

  }
  ngOnInit(): void {
    // this.https.get(this.backEndUrl).subscribe(
    //   (response:any)=>{
    //     console.log(response);
    //     this.backEndResponse=response;
    //   }
    // );
  }
}
