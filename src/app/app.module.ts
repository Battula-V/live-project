import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariablesComponent } from './components/variables/variables.component';
import { ArrayVariableComponent } from './components/array-variable/array-variable.component';
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { PropertyEventBindingComponent } from './components/property-event-binding/property-event-binding.component';
import { DataSharingComponent } from './components/data-sharing/data-sharing.component'; 
@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    ArrayVariableComponent,
    ObjectVariableComponent,
    MenuBarComponent,
    LifeCycleHooksComponent,
    PropertyEventBindingComponent,
    DataSharingComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
