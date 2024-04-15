import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-variable',
  templateUrl: './array-variable.component.html',
  styleUrls: ['./array-variable.component.scss']
})
export class ArrayVariableComponent implements OnInit{
  myFriends:Array<string> = ["somu", "ramu"];
  // To store any data type value in the array
  friends:Array<any> = ["somu", "ramu", 2];
  ngOnInit(): void {
    
  }

}
