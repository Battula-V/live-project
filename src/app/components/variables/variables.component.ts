import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit{

  address : string = "guntur";
  rollNumber : number = 123;
  is_employee : boolean = true;
  are_students : boolean = false;
  itemPrice : number = 20.98;
  ngOnInit(): void {
    let variableName = "venky";
    console.log(variableName);
    console.log(variableName);
    console.log(variableName);
    console.log(variableName);
  }
  

}
