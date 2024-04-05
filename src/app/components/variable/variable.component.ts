import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.scss']
})
export class VariableComponent implements OnInit{
  address:string="guntur";
  rollNumber:number=1714140386;
  is_principal:boolean=true;
  are_students:boolean=false;
  itemPrice:number=20.78;
  ngOnInit(): void {
    let userName="abbas";
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
