import { Component } from '@angular/core';

@Component({
  selector: 'app-object-variable',
  templateUrl: './object-variable.component.html',
  styleUrls: ['./object-variable.component.scss']
})
export class ObjectVariableComponent {
  myHousesOne : any = {key1:"chinthapalli" , key4:"macherla" ,  key2:"janapadu" , key3:"karempudi" ,key5:4, key6:5};
}
