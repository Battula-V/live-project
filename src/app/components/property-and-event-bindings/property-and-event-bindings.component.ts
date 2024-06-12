import { Component } from '@angular/core';

@Component({
  selector: 'app-property-and-event-bindings',
  templateUrl: './property-and-event-bindings.component.html',
  styleUrls: ['./property-and-event-bindings.component.scss']
})
export class PropertyAndEventBindingsComponent {
    code=`<input type="text" placeholder="Enter" value="hello"/>`;
    code1=`<input type="text" placeholder="Enter" [attribute]="variable"/>`;
    code2=`<input type="text" placeholder="Enter" [value]="myName"/>`;
    code3=`<button type="button" (eventName)="functionName()">Submit</button> `;
    code4=` <button type="button" (click)=""> submit</button>`;
    code5=` userName(){
      name="abbas";
      console.log(name);
  }`;
    code6=`<button type="button" (click)="userName()">submit</button>`;

    code7=`<tagname *ngFor=" let  ArrayValue of ArrayVariavble"> {{ArrayValue}} </tagname>`;
}
