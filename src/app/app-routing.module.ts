import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { DetailComponent } from './components/detail/detail.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { SectionComponent } from './components/section/section.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
    children:[
      {
        path:"",
        component: SectionComponent
      },
      {
        path:"about",
        component: AboutComponent
      },
      {
        path:"product",
        component: ProductComponent
      },
      {
        path:"detail",
        component: DetailComponent
      },
      {
        path:"blog",
        component: BlogComponent
      },
      {
        path:"blog-detail",
        component: BlogDetailComponent
      },
      {
        path:"contact",
        component: ContactComponent
      },
      {
        path:"account",
        component:AccountComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
