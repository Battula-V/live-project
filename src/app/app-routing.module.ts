import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { VariableComponent } from './components/variable/variable.component';
import { ArrayVariableComponent } from './components/array-variable/array-variable.component';
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';
import { MyFunctionComponent } from './components/my-function/MyFunctionComponent';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { PracticeComponent } from './components/practice/practice.component';
import { PropertyAndEventBindingsComponent } from './components/property-and-event-bindings/property-and-event-bindings.component';
import { DataSharingComponent } from './components/data-sharing/data-sharing.component';
import { DataSharingTypeOneComponent } from './components/data-sharing/components/data-sharing-type-one/data-sharing-type-one.component';
import { DataSharingTypeTwoComponent } from './components/data-sharing/components/data-sharing-type-two/data-sharing-type-two.component';
import { DataSharingTypeThreeComponent } from './components/data-sharing/components/data-sharing-type-three/data-sharing-type-three.component';
import { DataSharingTypeFourComponent } from './components/data-sharing/components/data-sharing-type-four/data-sharing-type-four.component';


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
  },
  {
    path:"my-function",
    component:MyFunctionComponent
  },
  {
    path:"life-cycle-hooks",
    component:LifeCycleHooksComponent
  },
  {
    path:"practice",
    component:PracticeComponent
  },
  {
    path:"property-and-event-binding",
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
        path:"type-three",
        component:DataSharingTypeThreeComponent
      },
      {
        path:"type-four",
        component:DataSharingTypeFourComponent
      }
    ]
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
