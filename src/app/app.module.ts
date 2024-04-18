import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariablesComponent } from './components/variables/variables.component';
import { ArrayVariableComponent } from './components/array-variable/array-variable.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';
import { MyFunctionsComponent } from './components/my-functions/my-functions.component';
import { MyClassComponent } from './components/my-class/my-class.component';
import { MyPreDefinedThingsComponent } from './components/my-pre-defined-things/my-pre-defined-things.component'; 
@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    ArrayVariableComponent,
    MenuBarComponent,
    ObjectVariableComponent,
    MyFunctionsComponent,
    MyClassComponent,
    MyPreDefinedThingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
