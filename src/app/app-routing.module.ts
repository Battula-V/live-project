import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { VariablesComponent } from './components/variables/variables.component';
import { ArrayVariableComponent } from './components/array-variable/array-variable.component';
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';
import { MyFunctionsComponent } from './components/my-functions/my-functions.component';
import { MyClassComponent } from './components/my-class/my-class.component';
import { MyPreDefinedThingsComponent } from './components/my-pre-defined-things/my-pre-defined-things.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { PropertyAndEventBindingsComponent } from './components/property-and-event-bindings/property-and-event-bindings.component';
import { DataSharingComponent } from './components/data-sharing/data-sharing.component';
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
  },
  {
    path : "my-pre-defined",
    component : MyPreDefinedThingsComponent
  },
  {
    path: "life-cycle-hooks",
    component: LifeCycleHooksComponent
  },
  {
    path:"property-and-event-bindings",
    component:PropertyAndEventBindingsComponent
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
