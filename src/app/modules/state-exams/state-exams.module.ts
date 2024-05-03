import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateExamsComponent } from './state-exams.component';
import { StateExamsRoutingModule } from "./state-exams-routing.module";
import { SscExamComponent } from './components/ssc-exam/ssc-exam.component';
import { IpeExamComponent } from './components/ipe-exam/ipe-exam.component';
import { PolycetExamComponent } from './components/polycet-exam/polycet-exam.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatListModule} from '@angular/material/list';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    StateExamsComponent,
    SscExamComponent,
    IpeExamComponent,
    PolycetExamComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    StateExamsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class StateExamsModule { }
