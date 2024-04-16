import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { VariablesComponent } from './components/variables/variables.component';
import { ArrayVariableComponent } from './components/array-variable/array-variable.component';
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';
import { MyFunctionsComponent } from './components/my-functions/my-functions.component';
import { MyClassComponent } from './components/my-class/my-class.component';

const routes: Routes = [
  {
    path:"",
    component:VariablesComponent
  },
  {
    path:"array-variable",
    component:ArrayVariableComponent
  },
  {
    path:"object-variable",
    component:ObjectVariableComponent
  },
  {
    path:"my-functions",
    component:MyFunctionsComponent
  },
  {
    path:"my-class",
    component:MyClassComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
