import { Component } from '@angular/core';

@Component({
  selector: 'app-data-sharing',
  templateUrl: './data-sharing.component.html',
  styleUrls: ['./data-sharing.component.scss']
})
export class DataSharingComponent {

  code1=`<app-child></app-child>`;
  code2=`<app-child [childVariable]="parentVariable"></app-child>`;
  code3=`updateUserName(event){
        this.userName=event;
    }`;
  
  code4=`<app-child  (childEventName)="parentFunctionName($event)"></app-child>`;
}
