import { Component } from '@angular/core';

@Component({
  selector: 'app-object-variable',
  templateUrl: './object-variable.component.html',
  styleUrls: ['./object-variable.component.scss']
})
export class ObjectVariableComponent {
    myFriends : any = {friend1:"rana" , friend2 : "raju"}
}
