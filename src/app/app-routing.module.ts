import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
const routes: Routes = [
   {
    path : "exams",
    loadChildren : () => import("./modules/exams/exams.module").then((m) => m.ExamsModule)
   },
   {
    path : "games",
    loadChildren : () => import("./modules/games/games.module").then((m) => m.GamesModule)
   },
   {
    path : "**",
    redirectTo : "exams"
   }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
