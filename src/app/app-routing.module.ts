import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { VariablesComponent } from './components/variables/variables.component';
import { ArrayVariableComponent } from './components/array-variable/array-variable.component';
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
const routes: Routes = [
  {
    path : "",
    component : VariablesComponent
  },
  {
    path : "array-variable",
    component : ArrayVariableComponent
  },
  {
    path : "object-variable",
    component : ObjectVariableComponent
  },
  {
    path : "life-cycle-hooks",
    component : LifeCycleHooksComponent
  }
]
   
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
