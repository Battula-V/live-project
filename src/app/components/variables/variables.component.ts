import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit{
  address:string="guntur";
  rollNumber:number=145;
  is_city:boolean=true;
  are_students:boolean=false;
  item_price:number=23.9;
  ngOnInit(): void {
    let userName="venkatesh";
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
    console.log(userName);
  }

}
