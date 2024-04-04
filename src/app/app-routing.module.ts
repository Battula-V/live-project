import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SectionComponent } from './components/section/section.component';
import { AboutComponent } from './components/about/about.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { DetailsComponent } from './components/details/details.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    children:[
      {
        path:"",
        component:SectionComponent
      },
      {
        path:"about",
        component:AboutComponent
      },
      {
        path:"recipe",
        component:RecipeComponent
      },
      {
        path:"details",
        component:DetailsComponent
      },
      {
        path:"gallery",
        component:GalleryComponent
      },
      {
        path:"contact",
        component:ContactComponent
      },
      {
        path:"faq",
        component:FaqComponent
      },
      {
        path:"team",
        component:TeamComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
