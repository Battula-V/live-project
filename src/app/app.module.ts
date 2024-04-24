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
    DataSharingTypeOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
