import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitDashboardComponent } from './unit-dashboard/unit-dashboard.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitRoutingModule } from './unit-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UnitDashboardComponent, UnitListComponent],
  imports: [
    CommonModule,
    UnitRoutingModule,
    SharedModule,
  ]
})
export class UnitModule { }
