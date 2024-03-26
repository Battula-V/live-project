import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { MorriesComponent } from './components/morries/morries.component';
import { FlotComponent } from './components/flot/flot.component';
import { InlineChartsComponent } from './components/inline-charts/inline-charts.component';
import { GeneralComponent } from './components/general/general.component';
import { IconsComponent } from './components/icons/icons.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { TimeLineComponent } from './components/time-line/time-line.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children:[
      {
        path:"",
        component: RightSideComponent
      },
      {
        path:"widgets",
        component:WidgetsComponent
      },
      {
        path:"morries",
        component: MorriesComponent
      },
      {
        path:"flot",
        component: FlotComponent
      },
      {
        path:"inline-charts",
        component: InlineChartsComponent
      },
      {
        path:"general",
        component: GeneralComponent
      },
      {
        path:"icons",
        component: IconsComponent
      },
      {
        path:"buttons",
        component: ButtonsComponent
      },
      {
        path:"sliders",
        component: SlidersComponent
      },
      {
        path:"time-line",
        component: TimeLineComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
