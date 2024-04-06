import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { VariableComponent } from './components/variable/variable.component';
import { ArrayVariableComponent } from './components/array-variable/array-variable.component';
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';

const routes: Routes = [
  {
    path:"",
    component:VariableComponent
  },
  {
    path:"array-variable",
    component:ArrayVariableComponent
  },
  {
    path:"object-variable",
    component:ObjectVariableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
