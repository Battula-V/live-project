import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MandiComponent } from './components/mandi/mandi.component';
import { LabelComponent } from './components/label/label.component';
import { RastaurantComponent } from './components/rastaurant/rastaurant.component';
import { RoboComponent } from './components/robo/robo.component';
import { VenkyComponent } from './components/venky/venky.component';

const routes: Routes = [
  {
      path:'',
      component:MandiComponent
  },
  {
    path:'label',
    component:LabelComponent
  },
  {
    path:'rastaurant',
    component:RastaurantComponent
  },
  {
    path:'robo',
    component:RoboComponent
  },
  {
      path:'**',
      component:VenkyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
