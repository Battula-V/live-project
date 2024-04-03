import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SectionComponent } from './components/section/section.component';
import { ArticleComponent } from './components/article/article.component';
import { OfferComponent } from './components/offer/offer.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ContactComponent } from './components/contact/contact.component';

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
        path:"article",
        component:ArticleComponent
      },
      {
        path:"offer",
        component:OfferComponent
      },
      {
        path:"typography",
        component:TypographyComponent
      },
      {
        path:"contact",
        component:ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
