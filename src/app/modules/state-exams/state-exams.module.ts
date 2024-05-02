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


@NgModule({
  declarations: [
    StateExamsComponent,
    SscExamComponent,
    IpeExamComponent,
    PolycetExamComponent
  ],
  imports: [
    CommonModule,
    StateExamsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule
  ]
})
export class StateExamsModule { }
