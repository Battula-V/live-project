import { Component } from '@angular/core';
import { ApplicationContextService } from "../shared/services/application-context.service";
import { ApplicationContext } from '../shared/models/application-context.model';
import { Router } from "@angular/router";
import { ROUTES } from '../shared/constants/application-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private applicationContextService : ApplicationContextService, private routerObj:Router){
    this.applicationContextService.applicationContext.subscribe(
      (res :ApplicationContext) => {
        console.log(res.loginStatus);
        if(!res.loginStatus){
          this.routerObj.navigate([ROUTES.LOGIN]);
        }
      }
    );
  }

}
