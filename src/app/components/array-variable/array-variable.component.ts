import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-variable',
  templateUrl: './array-variable.component.html',
  styleUrls: ['./array-variable.component.scss']
})
export class ArrayVariableComponent implements OnInit{
  myFriends:Array<string>=["ramu","somu"];
  myFriends1:Array<string>=["somu","ramu"];
  friends:Array<any>=["ramu","somu",2];
  ngOnInit(): void {
    
  }

}
