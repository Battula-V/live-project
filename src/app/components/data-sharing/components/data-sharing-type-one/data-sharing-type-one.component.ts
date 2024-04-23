import { Component } from '@angular/core';

@Component({
  selector: 'app-data-sharing-type-one',
  templateUrl: './data-sharing-type-one.component.html',
  styleUrls: ['./data-sharing-type-one.component.scss']
})
export class DataSharingTypeOneComponent {
    code1=`<app-child></app-child>`;
    code2=`<app-child [childVariable]="parentVariable"></app-child>`;
    code3=`<app-child [empolyeeName]="userName"></app-child>`;
    code4=` <app-child [childVariable]="data"></app-child>`;
    code5=`<app-child [empolyeeName]="'raghu'"></app-child>`;
    code6=` updateUserName(event){
              console.log(event);
            }`;
    code7=`<app-child (childEventName)="parentFunctionName($event)"></app-child>`;
    code8=`<app-child (myEvent)="updateUserName($event)"></app-child>`;
}
