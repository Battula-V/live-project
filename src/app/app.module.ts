import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariablesComponent } from './components/variables/variables.component';
import { ArrayVariablesComponent } from './components/array-variables/array-variables.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';
import { MyPreDefinedThingsComponent } from './components/my-pre-defined-things/my-pre-defined-things.component';
import { AngularLifeCycleHooksComponent } from './components/angular-life-cycle-hooks/angular-life-cycle-hooks.component'; 
import {FormsModule } from "@angular/forms";
import { PropertyAndEventBindingComponent } from './components/property-and-event-binding/property-and-event-binding.component';
import { DataSharingComponent } from './components/data-sharing/data-sharing.component';


@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    ArrayVariablesComponent,
    MenuBarComponent,
    ObjectVariableComponent,
    MyPreDefinedThingsComponent,
    AngularLifeCycleHooksComponent,
    PropertyAndEventBindingComponent,
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
