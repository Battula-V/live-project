import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';  
import { ExamsComponent } from './exams.component';
import { PloycetComponent } from './components/ploycet/ploycet.component';
import { ECetComponent } from './components/e-cet/e-cet.component';
import { EamcetComponent } from './components/eamcet/eamcet.component';


const routes: Routes = [
  {
    path : "",
    component : ExamsComponent,
    children : [
      {
        path : "polycet",
        component: PloycetComponent
      },
      {
        path : "eamcet",
        component : EamcetComponent
      },
      {
        path : "e-cet",
        component : ECetComponent
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
export class ExamsRoutingModule { }
