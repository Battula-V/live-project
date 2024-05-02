import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams.component';
import { ExamsRoutingModule } from "./exams-routing.module";
import { PloycetComponent } from './components/ploycet/ploycet.component';
import { ECetComponent } from './components/e-cet/e-cet.component';
import { EamcetComponent } from './components/eamcet/eamcet.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    ExamsComponent,
    PloycetComponent,
    ECetComponent,
    EamcetComponent
  ],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule
  ]
})
export class ExamsModule { }
