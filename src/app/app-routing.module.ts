import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { VariableComponent } from './components/variable/variable.component';

const routes: Routes = [
  {
    path:"",
    component:VariableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
