import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { VariableComponent } from './components/variable/variable.component';
import { ArrayVariableComponent } from './components/array-variable/array-variable.component';
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';
import { MyFunctionComponent } from './components/my-function/MyFunctionComponent';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { PracticeComponent } from './components/practice/practice.component';


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
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
