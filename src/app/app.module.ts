import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariableComponent } from './components/variable/variable.component';
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ArrayVariableComponent } from './components/array-variable/array-variable.component';
import { MyFunctionComponent } from './components/my-function/MyFunctionComponent';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    VariableComponent,
    ObjectVariableComponent,
    MenuBarComponent,
    ArrayVariableComponent,
    MyFunctionComponent,
    LifeCycleHooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
