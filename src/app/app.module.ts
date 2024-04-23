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
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { FormsModule } from "@angular/forms";
import { PropertyAndEventBindingsComponent } from './components/property-and-event-bindings/property-and-event-bindings.component';
import { DataSharingComponent } from './components/data-sharing/data-sharing.component';
@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    ArrayVariableComponent,
    MenuBarComponent,
    ObjectVariableComponent,
    MyFunctionsComponent,
    MyClassComponent,
    MyPreDefinedThingsComponent,
    LifeCycleHooksComponent,
    PropertyAndEventBindingsComponent,
    DataSharingComponent
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
