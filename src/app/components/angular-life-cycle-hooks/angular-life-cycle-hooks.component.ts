import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-life-cycle-hooks',
  templateUrl: './angular-life-cycle-hooks.component.html',
  styleUrls: ['./angular-life-cycle-hooks.component.scss']
})
export class AngularLifeCycleHooksComponent {
  name="safi";
  user(){
    this.name="ramanji";
  }
}
