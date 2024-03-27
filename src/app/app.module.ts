import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MandiComponent } from './components/mandi/mandi.component';
import { RastaurantComponent } from './components/rastaurant/rastaurant.component';
import { LabelComponent } from './components/label/label.component';
import { RoboComponent } from './components/robo/robo.component';
import { VenkyComponent } from './components/venky/venky.component';

@NgModule({
  declarations: [
    AppComponent,
    MandiComponent,
    RastaurantComponent,
    LabelComponent,
    RoboComponent,
    VenkyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
