import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { VariablesComponent } from './components/variables/variables.component';
import { ArrayVariablesComponent } from './components/array-variables/array-variables.component'; 
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';
import { MyPreDefinedThingsComponent } from './components/my-pre-defined-things/my-pre-defined-things.component';
import { AngularLifeCycleHooksComponent } from './components/angular-life-cycle-hooks/angular-life-cycle-hooks.component';
import { PropertyAndEventBindingComponent } from './components/property-and-event-binding/property-and-event-binding.component';
import { DataSharingComponent } from './components/data-sharing/data-sharing.component';
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
  },
  {
    path : "my-pre-defined-things",
    component : MyPreDefinedThingsComponent
  },
  {
    path : "angular-life-cycle-hooks",
    component:AngularLifeCycleHooksComponent
  },
  {
    path : "property-and-event-binding",
    component : PropertyAndEventBindingComponent 
  },
  {
    path : "data-sharing",
    component : DataSharingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
