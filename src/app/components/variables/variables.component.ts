import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit{

  address = "guntur";
  rollNumber = 45;
  is_student = false;

  ngOnInit(): void {
    let name="ramu";
    console.log(name);
    console.log(name);
    console.log(name);
    console.log(name);
    console.log(name);
  }



}
