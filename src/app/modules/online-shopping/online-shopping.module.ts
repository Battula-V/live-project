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
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    OnlineShoppingComponent,
    DressesComponent,
    BooksComponent,
    VehiclesComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    OnlineShoppingRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  MatInputModule
  ]
})
export class OnlineShoppingModule { }
