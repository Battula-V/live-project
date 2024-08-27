import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit{
  @ViewChild('myFile') myFile!:ElementRef;
  constructor(){

  }
  openFile(){
    this.myFile.nativeElement.click();
  }
    address:string="guntur";
    roleNumber:number=1714130386;
    is_principal:boolean=true;
    are_students:boolean=false;
    itemPrice:number=20.67;
  ngOnInit(): void {
    let userName="rajeesh";
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
  }

}
