import { Component } from '@angular/core';

@Component({
  selector: 'app-working-with-forms',
  templateUrl: './working-with-forms.component.html',
  styleUrls: ['./working-with-forms.component.scss']
})
export class WorkingWithFormsComponent {

name = "email";

code1=`
    <form>

        <input type="text" placeholder="Enter" [(ngModel)]="variableName"/>

    </form>
`;

code2=`
    <form>

        <input type="text" placeholder="Enter" [formControl]="variableName"/>

    </form>
`;

}
