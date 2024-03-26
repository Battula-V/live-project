import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { MorrisComponent } from './components/morris/morris.component';
import { FlotComponent } from './components/flot/flot.component';
import { InlineChartsComponent } from './components/inline-charts/inline-charts.component';
import { GeneralComponent } from './components/general/general.component';
import { IconsComponent } from './components/icons/icons.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { GeneralElementsComponent } from './components/general-elements/general-elements.component';
import { AdvancedElementsComponent } from './components/advanced-elements/advanced-elements.component';
import { EditorsComponent } from './components/editors/editors.component';
import { SimpleTablesComponent } from './components/simple-tables/simple-tables.component';
import { DataTablesComponent } from './components/data-tables/data-tables.component';
import { CalenderComponent } from './components/calender/calender.component';
import { MailboxComponent } from './components/mailbox/mailbox.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { BlankPageComponent } from './components/blank-page/blank-page.component';
import { FourHundredFourErrorComponent } from './components/four-hundred-four-error/four-hundred-four-error.component';
import { FiveHundredErrorComponent } from './components/five-hundred-error/five-hundred-error.component';

const routes: Routes = [
  {
    path:"",
    component: DashboardComponent,
    children:[
      { 
        path:"",
        component: RightSideComponent
      },
      {
        path:"widgets",
        component: WidgetsComponent
      },
      {
        path:"morris",
        component: MorrisComponent
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
        component:TimeLineComponent
      },
      {
        path:"general-elements",
        component:GeneralElementsComponent
      },
      {
        path:"advanced-elements",
        component: AdvancedElementsComponent
      },
      {
        path:"editors",
        component: EditorsComponent
      },
      {
        path:"simple-tables",
        component: SimpleTablesComponent
      },
      {
        path:"data-tables",
        component: DataTablesComponent
      },
      {
        path:"calender",
        component: CalenderComponent
      },
      {
        path:"mailbox",
        component: MailboxComponent
      },
      {
        path:"invoice",
        component: InvoiceComponent
      },
      {
        path:"404-error",
        component: FourHundredFourErrorComponent
      },
      {
        path:"500-error",
        component: FiveHundredErrorComponent
      },
      {
        path:"blank-page",
        component: BlankPageComponent
      }
    ]
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"lock-screen",
    component: LockscreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
