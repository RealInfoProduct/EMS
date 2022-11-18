import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebMainComponent } from '../web/web-main/web-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { BonusAttendanceComponent } from './bonus-attendance/bonus-attendance.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    WebMainComponent,
    DashboardComponent,
    AddEmployeeComponent,
    BonusAttendanceComponent,
    ReportComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule,
  ]
})
export class WebModule { }
