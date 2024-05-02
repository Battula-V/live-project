import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
const routes: Routes = [
  {
    path : "state-exams",
    loadChildren : () => import("./modules/state-exams/state-exams.module").then((m) => m.StateExamsModule)
  },
  {
    path : "central-exams",
    loadChildren : () => import("./modules/central-exams/central-exams.module").then((m) => m.CentralExamsModule)
  },
  {
    path : "**",
    redirectTo : "state-exams"
  }
]
   
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
