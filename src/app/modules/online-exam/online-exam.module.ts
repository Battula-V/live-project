import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineExamComponent } from './online-exam.component';
import { OnlineExamRoutingModule } from "./online-exam-routing.module";
import { EamcetExamComponent } from './components/eamcet-exam/eamcet-exam.component';
import { JntuExamComponent } from './components/jntu-exam/jntu-exam.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    OnlineExamComponent,
    EamcetExamComponent,
    JntuExamComponent
  ],
  imports: [
    CommonModule,
    OnlineExamRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule
  ]
})
export class OnlineExamModule { }
