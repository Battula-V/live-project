import { Component } from '@angular/core';

@Component({
  selector: 'app-array-variable',
  templateUrl: './array-variable.component.html',
  styleUrls: ['./array-variable.component.scss']
})
export class ArrayVariableComponent {
  myFriends:Array<string>=["ramu" , "sowmya" , "rajesh" , "babu" , "somu"];
  myFriends1:Array<any>=["ramu" , "somu" , "sowmya" , "rajesh" , "babu" , 4];
}
