import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebMainComponent } from './web-main/web-main.component';
import { canActivate,redirectUnauthorizedTo} from '@angular/fire/auth-guard'

const redirectLogin = () =>  redirectUnauthorizedTo(['login']);

const routes: Routes = [{
  path: '',
  component: WebMainComponent,
  ...canActivate(redirectLogin),


  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    // {
    //   path: 'addemployee',
    //   component: AddEmployeeComponent
    // },
    // {
    //   path: 'bonusattendance',
    //   component: BonusAttendanceComponent
    // },
    // {
    //   path: 'report',
    //   component: ReportComponent
    // },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
