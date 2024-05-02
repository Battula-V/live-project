import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineShoppingComponent } from './online-shopping.component';
import { OnlineShoppingRoutingModule } from "./online-shopping-routing.module";
import { DressesComponent } from './components/dresses/dresses.component';
import { BooksComponent } from './components/books/books.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    OnlineShoppingComponent,
    DressesComponent,
    BooksComponent,
    VehiclesComponent
  ],
  imports: [
    CommonModule,
    OnlineShoppingRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule
  ]
})
export class OnlineShoppingModule { }
