import { Component } from '@angular/core';

@Component({
  selector: 'app-object-variables',
  templateUrl: './object-variables.component.html',
  styleUrls: ['./object-variables.component.scss']
})
export class ObjectVariablesComponent {

  myFriends:any = {friend1:"ramu" , friend2:"srinu", salary:123}
}
