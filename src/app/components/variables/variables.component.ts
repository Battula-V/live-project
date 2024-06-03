import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit{
  address:string="guntur";
  rollNumber:number=714130987;
  is_principal:boolean=true;
  are_students:boolean=false;
  item_price:number=43.90;
  ngOnInit(): void {
    let userName="mohan";
     console.log(userName); 
     console.log(userName); 
     console.log(userName); 
     console.log(userName); 
     console.log(userName); 
     console.log(userName); 
  }

}
