import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './modules/user-home/user-home.component';
import { UserHeaderComponent } from './modules/user-header/user-header.component';
import { UserFooterComponent } from './modules/user-footer/user-footer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    UserHeaderComponent,
    UserFooterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
