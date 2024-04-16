import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariableComponent } from './components/variable/variable.component';
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ArrayVariableComponent } from './components/array-variable/array-variable.component';
import { MyFunctionComponent } from './components/my-function/MyFunctionComponent';
@NgModule({
  declarations: [
    AppComponent,
    VariableComponent,
    ObjectVariableComponent,
    MenuBarComponent,
    ArrayVariableComponent,
    MyFunctionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
