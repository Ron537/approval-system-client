import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestDashboardComponent } from './request-dashboard/request-dashboard.component';
import { RequestRoutingModule } from './request-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RequestListComponent, RequestDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RequestRoutingModule
  ]
})
export class RequestModule { }
