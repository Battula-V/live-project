import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';  
import { OnlineFoodComponent } from './online-food.component';

const routes: Routes = [
  {
    path : "",
    component : OnlineFoodComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OnlineFoodRoutingModule { }
