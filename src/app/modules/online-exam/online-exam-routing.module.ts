import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';  
import { OnlineExamComponent } from './online-exam.component';
import { EamcetExamComponent } from './components/eamcet-exam/eamcet-exam.component';
import { JntuExamComponent } from './components/jntu-exam/jntu-exam.component';

const routes: Routes = [
  {
    path : "",
    component : OnlineExamComponent, 
    children : [
    {
      path : "eamcet-exam",
      component : EamcetExamComponent
    },
    {
      path : "jntu-exam",
      component : JntuExamComponent
    }]
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
export class OnlineExamRoutingModule { }
