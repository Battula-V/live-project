import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { RightSideComponent } from './components/right-side/right-side.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children:[
      {
        path:"",
        component: RightSideComponent
      },
      {
        path:"widgets",
        component: WidgetsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
