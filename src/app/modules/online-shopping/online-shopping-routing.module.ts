import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';  
import { OnlineShoppingComponent } from './online-shopping.component';
import { BooksComponent } from './components/books/books.component';
import { DressesComponent } from './components/dresses/dresses.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path : "",
    component : OnlineShoppingComponent,
    children :[
      {
        path : "",
        component : LoginComponent
      },
      {
        path : "books",
        component : BooksComponent
      },
      {
        path : "dresses",
        component : DressesComponent
      },
      {
        path : "vehicles",
        component : VehiclesComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OnlineShoppingRoutingModule { }
