import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariablesComponent } from './components/variables/variables.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ArrayVariablesComponent } from './components/array-variables/array-variables.component';
import { ObjectVariablesComponent } from './components/object-variables/object-variables.component'; 
@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    MenuBarComponent,
    ArrayVariablesComponent,
    ObjectVariablesComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
