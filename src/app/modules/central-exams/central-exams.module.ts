import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralExamsComponent } from './central-exams.component';
import { CentralExamsRoutingModule } from "./central-exams-routing.module";


@NgModule({
  declarations: [
    CentralExamsComponent
  ],
  imports: [
    CommonModule,
    CentralExamsRoutingModule
  ]
})
export class CentralExamsModule { }
