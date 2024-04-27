import { Component } from '@angular/core';

@Component({
  selector: 'app-array-variables',
  templateUrl: './array-variables.component.html',
  styleUrls: ['./array-variables.component.scss']
})
export class ArrayVariablesComponent {
  myFriends:Array<string>=["ramu",  "akbar" , "somu"]
  myFriendsOne:Array<any>=["ramu" , "somesh" ,2]
}
