import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';  
import { CentralExamsComponent } from './central-exams.component';

const routes: Routes = [
  {
    path : "",
    component : CentralExamsComponent
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
export class CentralExamsRoutingModule { }
