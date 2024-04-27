import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { VariablesComponent } from './components/variables/variables.component';
import { ArrayVariablesComponent } from './components/array-variables/array-variables.component';
import { ObjectVariablesComponent } from './components/object-variables/object-variables.component';
const routes: Routes = [
  {
    path : "",
    component : VariablesComponent
  },
  {
    path : "array-variable",
    component: ArrayVariablesComponent 
  },
  {
    path : "object-variable",
    component : ObjectVariablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
