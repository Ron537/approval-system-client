import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitDashboardComponent } from './unit-dashboard/unit-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: UnitDashboardComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnitRoutingModule { }
