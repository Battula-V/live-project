import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-variables',
  templateUrl: './array-variables.component.html',
  styleUrls: ['./array-variables.component.scss']
})
export class ArrayVariablesComponent implements OnInit{
  myFriends:Array<string>=["ramu","somu"];
  friends:Array<any>=["rana","jaggu",2,3]
  ngOnInit(): void {
    
  }

}
