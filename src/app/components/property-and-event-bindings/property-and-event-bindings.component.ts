import { Component } from '@angular/core';

@Component({
  selector: 'app-property-and-event-bindings',
  templateUrl: './property-and-event-bindings.component.html',
  styleUrls: ['./property-and-event-bindings.component.scss']
})
export class PropertyAndEventBindingsComponent {
code1=`<input type="text" placeholder="Enter" [attribue]="variable"/>`;
code2=`<input type="text" placeholder="Enter" value="hello"/>`;
code3=`<input type="text" placeholder="Enter" [value]="myName"/>`;
code4=`<button type="button" (eventName)="FunctionName()">Submit</button>`;
code5=`<button type="button" (click)="">submit</button>`;
code6=`userName(){
  name="abbas";
  console.log(name);
}`;
code7=`<button type="button" (click)="userName()">Submit</button>`;
}
