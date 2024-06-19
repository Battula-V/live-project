import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "./home-routing.module";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider'; 
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SuperAdminComponent } from './components/super-admin/super-admin.component';
import { AdminComponent } from './components/admin/admin.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeesComponent } from './components/employees/employees.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { DesignationComponent } from './components/designation/designation.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    SuperAdminComponent,
    AdminComponent,
    DepartmentComponent,
    EmployeesComponent,
    DesignationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
