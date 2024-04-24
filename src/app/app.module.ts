import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariablesComponent } from './components/variables/variables.component';
import { MenuComponent } from './components/menu/menu.component';
import { PracticeComponent } from './components/practice/practice.component';
import { DataSharingComponent } from './components/data-sharing/data-sharing.component';
import { DataSharingTypeFourComponent } from './components/data-sharing/components/data-sharing-type-four/data-sharing-type-four.component';
import { DataSharingTypeThreeComponent } from './components/data-sharing/components/data-sharing-type-three/data-sharing-type-three.component';
import { DataSharingTypeTwoComponent } from './components/data-sharing/components/data-sharing-type-two/data-sharing-type-two.component';
import { DataSharingTypeOneComponent } from './components/data-sharing/components/data-sharing-type-one/data-sharing-type-one.component';
import { ArrayVariableComponent } from './components/array-variable/array-variable.component';
import { ObjectVariableComponent } from './components/object-variable/object-variable.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    MenuComponent,
    PracticeComponent,
    DataSharingComponent,
    DataSharingTypeFourComponent,
    DataSharingTypeThreeComponent,
    DataSharingTypeTwoComponent,
    DataSharingTypeOneComponent,
    ArrayVariableComponent,
    ObjectVariableComponent,
    LifeCycleHooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
