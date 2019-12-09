import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitDashboardComponent } from './unit-dashboard/unit-dashboard.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitRoutingModule } from './unit-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UnitApproversDialogComponent } from './unit-approvers-dialog/unit-approvers-dialog.component';

@NgModule({
  declarations: [UnitDashboardComponent, UnitListComponent, UnitApproversDialogComponent],
  imports: [
    CommonModule,
    UnitRoutingModule,
    SharedModule,
  ],
  entryComponents: [
    UnitApproversDialogComponent
  ]
})
export class UnitModule { }
