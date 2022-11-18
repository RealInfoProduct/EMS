import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebMainComponent } from '../web/web-main/web-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    WebMainComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule,
  ]
})
export class WebModule { }
