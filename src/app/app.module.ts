import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariablesComponent } from './components/variables/variables.component';
import { ArrayVariableComponent } from './components/array-variable/array-variable.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ObjectVariableComponent } from './components/object-variable/object-variable.component'; 
@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    ArrayVariableComponent,
    MenuBarComponent,
    ObjectVariableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
