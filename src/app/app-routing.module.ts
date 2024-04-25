import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { VariablesComponent } from './components/variables/variables.component';
import { ArrayVariableComponent } from './components/array-variable/array-variable.component';
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { PropertyEventBindingComponent } from './components/property-event-binding/property-event-binding.component';
import { DataSharingComponent } from './components/data-sharing/data-sharing.component';
const routes: Routes = [
   {
    path : "variables",
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
    path:"life-cycle-hooks",
    component:LifeCycleHooksComponent
   },
   {
    path:"property-event-binding",
    component:PropertyEventBindingComponent
   },
   {
    path:"data-sharing",
    component:DataSharingComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
