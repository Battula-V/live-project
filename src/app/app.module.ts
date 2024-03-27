import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule} from '@angular/material/toolbar';
// https://www.npmjs.com/package/ng-image-slider(imeges)
// image slider
import { NgImageSliderModule } from 'ng-image-slider';
// for cards
import {MatCardModule} from '@angular/material/card';
import { Level1categoriesComponent } from './components/level1categories/level1categories.component';
import { Level2categoriesComponent } from './components/level2categories/level2categories.component';
import { CountryComponent } from './components/country/country.component';
import { StateComponent } from './components/state/state.component';
import { DistrictComponent } from './components/district/district.component';
import { MandalComponent } from './components/mandal/mandal.component';
import { VillageComponent } from './components/village/village.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Level1categoriesComponent,
    Level2categoriesComponent,
    CountryComponent,
    StateComponent,
    DistrictComponent,
    MandalComponent,
    VillageComponent,
    RestaurantComponent,
    HomePageComponent,
    AdminComponent,
    AdminHeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    NgImageSliderModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
