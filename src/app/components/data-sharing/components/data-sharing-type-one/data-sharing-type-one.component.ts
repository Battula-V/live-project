import { Component } from '@angular/core';

@Component({
  selector: 'app-data-sharing-type-one',
  templateUrl: './data-sharing-type-one.component.html',
  styleUrls: ['./data-sharing-type-one.component.scss']
})
export class DataSharingTypeOneComponent {
  code1=`<app-child></app-child>`;
  code2=`<app-child [childVariable] = "parentVariable"></app-child>`;
  code3=`<app-child [employeeName] = "userName"></app-child>`;
  code4=`updateUserName(event){
            this.userName=event;
          }`;
  code5=`<app-child (childEventName)="parentFunctionName(event)"></app-child>`;
  code6=`<app-child (myEvent)="updateUserName($event)"></app-child>`;
}
