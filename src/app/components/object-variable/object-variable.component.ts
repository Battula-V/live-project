import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-variable',
  templateUrl: './object-variable.component.html',
  styleUrls: ['./object-variable.component.scss']
})
export class ObjectVariableComponent implements OnInit{
  myFriends:any={friend1:"somu", friend2:"rana"}
  ngOnInit(): void {
    
  }

}
