import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';  
import { OnlineExamsComponent } from './online-exams.component';

const routes: Routes = [
  {
    path : "",
    component : OnlineExamsComponent
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
export class OnlineExamsRoutingModule { }
