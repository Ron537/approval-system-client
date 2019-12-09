import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestDashboardComponent } from './request-dashboard/request-dashboard.component';
import { RequestRoutingModule } from './request-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RequestAdditionalInfoDialogComponent } from './request-additional-info-dialog/request-additional-info-dialog.component';

@NgModule({
  declarations: [RequestListComponent, RequestDashboardComponent, RequestAdditionalInfoDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    RequestRoutingModule
  ],
  entryComponents: [
    RequestAdditionalInfoDialogComponent
  ]
})
export class RequestModule { }
