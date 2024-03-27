import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Level1categoriesComponent } from './components/level1categories/level1categories.component';
import { CountryComponent } from './components/country/country.component';
import { StateComponent } from './components/state/state.component';
import { DistrictComponent } from './components/district/district.component';
import { MandalComponent } from './components/mandal/mandal.component';
import { VillageComponent } from './components/village/village.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path : "",
    component:HomeComponent,
    children:[
      {
        path :"",
        component:HomePageComponent
      },
      {
        path:"login",
        component:LoginComponent
      }
    ]
  },
 
  {
    path :"admin",
    component :AdminComponent,
    children:[
      {
        path: "country",
        component: CountryComponent
      },
      {
        path: "state",
        component: StateComponent
      },
      {
        path: "district",
        component: DistrictComponent
      },
      {
        path: "mandal",
        component: MandalComponent
      },
      {
        path: "village",
        component: VillageComponent
      },
      {
        path:"level1Categories",
        component:Level1categoriesComponent
      },
      {
        path:"restaurant",
        component: RestaurantComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
