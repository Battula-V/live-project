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
import { DataSharingTypeOneComponent } from './components/data-sharing/components/data-sharing-type-one/data-sharing-type-one.component';
import { DataSharingTypeTwoComponent } from './components/data-sharing/components/data-sharing-type-two/data-sharing-type-two.component';
import { DataSharingTypeThreeComponent } from './components/data-sharing/components/data-sharing-type-three/data-sharing-type-three.component';
import { DataSharingTypeFourComponent } from './components/data-sharing/components/data-sharing-type-four/data-sharing-type-four.component';
import { CreatingMultipleProjectsComponent } from './components/creating-multiple-projects/creating-multiple-projects.component';
import { CallingApisComponent } from './components/calling-apis/calling-apis.component';
const routes: Routes = [
  {
    path:"",
    component:VariablesComponent,
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
    component:DataSharingComponent,
    children:[
      {
        path:"type-one",
        component:DataSharingTypeOneComponent
      },
      {
        path:"type-two",
        component:DataSharingTypeTwoComponent
      },
      {
        path:"type-three/:name",
        component:DataSharingTypeThreeComponent
      },
      {
        path:"type-four",
        component:DataSharingTypeFourComponent,
        data : {name:"ramu" ,salary:1200}
      }
    ]
  },
  {
    path : "creating-multiple-projects",
    component : CreatingMultipleProjectsComponent 
  },
  {
    path  : "calling-apis",
    component : CallingApisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
