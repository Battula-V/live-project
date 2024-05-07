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
import { DataSharingTypeOneComponent } from './components/data-sharing/components/data-sharing-type-one/data-sharing-type-one.component';
import { DataSharingTypeTwoComponent } from './components/data-sharing/components/data-sharing-type-two/data-sharing-type-two.component';
import { DataSharingTypeThreeComponent } from './components/data-sharing/components/data-sharing-type-three/data-sharing-type-three.component';
import { DataSharingTypeFourComponent } from './components/data-sharing/components/data-sharing-type-four/data-sharing-type-four.component';
import { CreatingMultipleProjectsComponent } from './components/creating-multiple-projects/creating-multiple-projects.component';
import { CallingApisComponent } from './components/calling-apis/calling-apis.component';
import { WorkingWithFormsComponent } from './components/working-with-forms/working-with-forms.component';
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
    DataSharingComponent,
    DataSharingTypeOneComponent,
    DataSharingTypeTwoComponent,
    DataSharingTypeThreeComponent,
    DataSharingTypeFourComponent,
    CreatingMultipleProjectsComponent,
    CallingApisComponent,
    WorkingWithFormsComponent
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
