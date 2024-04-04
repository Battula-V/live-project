import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SectionComponent } from './components/section/section.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeamComponent } from './components/team/team.component';
import { AccountComponent } from './components/account/account.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';

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
        path:"blog",
        component:BlogComponent
      },
      {
        path:"blog-detail",
        component:BlogDetailComponent
      },
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"contact",
        component:ContactComponent
      },
      {
        path:"team",
        component:TeamComponent
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
