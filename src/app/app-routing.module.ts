import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { UserHomeComponent } from './modules/user-home/user-home.component';

const routes: Routes = [
  {
    path:"",
    component:UserHomeComponent
  },
  {
    path:"**",
    redirectTo:"/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
