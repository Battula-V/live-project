import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';  
import { HomeComponent } from './home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SuperAdminComponent } from './components/super-admin/super-admin.component';
import { AdminComponent } from './components/admin/admin.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DesignationComponent } from './components/designation/designation.component';
import { CategoryComponent } from './components/category/category.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { ProductsComponent } from './components/products/products.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    children:[
      {
        path:"dashboard",
        component : DashboardComponent
      },
      {
        path:"category",
        component:CategoryComponent
      },
      {
        path:"sub-category",
        component:SubCategoryComponent
      },
      {
        path:"products",
        component:ProductsComponent
      }
      // {
      //   path:"super-admin",
      //   component:SuperAdminComponent
      // },
      // {
      //   path:"admin",
      //   component:AdminComponent
      // },
      // {
      //   path:"department",
      //   component:DepartmentComponent
      // },
      // {
      //   path:"employees",
      //   component:EmployeesComponent
      // },
      // {
      //   path:"designation",
      //   component:DesignationComponent
      // }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
