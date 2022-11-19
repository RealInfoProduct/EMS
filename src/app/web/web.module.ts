import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebMainComponent } from '../web/web-main/web-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { BonusAttendanceComponent } from './bonus-attendance/bonus-attendance.component';
import { ReportComponent } from './report/report.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    
  ]
})
export class WebModule { }
