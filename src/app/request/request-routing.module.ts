import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestDashboardComponent } from './request-dashboard/request-dashboard.component';

const routes: Routes = [
    {
        path: 'approvable',
        component: RequestDashboardComponent,
    },
    {
        path: 'my',
        component: RequestDashboardComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RequestRoutingModule { }
