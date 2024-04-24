import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { PracticeComponent } from './components/practice/practice.component';
import { VariablesComponent } from './components/variables/variables.component';
import { DataSharingComponent } from './components/data-sharing/data-sharing.component';
import { DataSharingTypeOneComponent } from './components/data-sharing/components/data-sharing-type-one/data-sharing-type-one.component';
import { DataSharingTypeTwoComponent } from './components/data-sharing/components/data-sharing-type-two/data-sharing-type-two.component';
import { DataSharingTypeThreeComponent } from './components/data-sharing/components/data-sharing-type-three/data-sharing-type-three.component';
import { DataSharingTypeFourComponent } from './components/data-sharing/components/data-sharing-type-four/data-sharing-type-four.component';
import { ArrayVariableComponent } from './components/array-variable/array-variable.component';
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
const routes: Routes = [
  {
    path:"practice",
    component:PracticeComponent
  },
  {
    path:"variables",
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
    path:"life-cycle-hooks",
    component:LifeCycleHooksComponent
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
