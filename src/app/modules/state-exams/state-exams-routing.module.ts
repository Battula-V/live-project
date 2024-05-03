import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';  
import { StateExamsComponent } from './state-exams.component';
import { SscExamComponent } from './components/ssc-exam/ssc-exam.component';
import { IpeExamComponent } from './components/ipe-exam/ipe-exam.component';
import { PolycetExamComponent } from './components/polycet-exam/polycet-exam.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path : "",
    component : StateExamsComponent,
    children : [
      {
        path : "",
        component : LoginComponent
      },
      {
        path : "ssc-exam",
        component : SscExamComponent
      },
      {
        path : "ipe-exam",
        component : IpeExamComponent
      },
      {
        path : "polycet-exam",
        component : PolycetExamComponent
      }
    ]
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
export class StateExamsRoutingModule { }
