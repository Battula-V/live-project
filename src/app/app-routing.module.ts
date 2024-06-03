import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { VariablesComponent } from './components/variables/variables.component';
import { ArrayVariablesComponent } from './components/array-variables/array-variables.component'; 
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';
const routes: Routes = [
  {
    path :"",
    component:VariablesComponent
  },
  {
    path : "array-variables",
    component : ArrayVariablesComponent
  },
  {
    path : "object-variable",
    component : ObjectVariableComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
