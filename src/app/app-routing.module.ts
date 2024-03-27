import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { SectionComponent } from './components/section/section.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    children:[
      {
        path:"",
        component: SectionComponent
      },
      {
        path:"product",
        component: ProductComponent
      },
      {
        path:"product-detail",
        component: ProductDetailComponent
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
        path:"about-us",
        component: AboutUsComponent
      },
      {
        path:"contact",
        component: ContactComponent
      },
      {
        path:"login",
        component: LoginComponent
      },
      {
        path:"cart",
        component: CartComponent
      },
      {
        path:"checkout",
        component: CheckOutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
