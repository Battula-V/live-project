import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
const routes: Routes = [
  {
    path : "online-shopping",
    loadChildren : () => import("./modules/online-shopping/online-shopping.module").then((m) => m.OnlineShoppingModule)
  },
  {
    path : "online-food",
    loadChildren : () => import("./modules/online-food/online-food.module").then((m) => m.OnlineFoodModule)
  },
  {
    path : "**",
    redirectTo : "online-shopping"
  }
]
   
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
