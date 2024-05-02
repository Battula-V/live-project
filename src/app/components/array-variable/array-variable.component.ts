import { Component } from '@angular/core';

@Component({
  selector: 'app-array-variable',
  templateUrl: './array-variable.component.html',
  styleUrls: ['./array-variable.component.scss']
})
export class ArrayVariableComponent {

  myFriends:Array<string> = ["somu", "ramu", "akbar", "manoj"]
  myFriendsOne:Array<any> = ["amar", 3,"raju", "abbas"]
}
