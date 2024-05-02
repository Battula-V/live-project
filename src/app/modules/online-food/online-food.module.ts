import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineFoodComponent } from './online-food.component';
import { OnlineFoodRoutingModule } from "./online-food-routing.module";


@NgModule({
  declarations: [
    OnlineFoodComponent
  ],
  imports: [
    CommonModule,
    OnlineFoodRoutingModule
  ]
})
export class OnlineFoodModule { }
