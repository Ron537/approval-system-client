import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'request',
    loadChildren: './request/request.module#RequestModule',
  },
  {
    path: 'unit',
    loadChildren: './unit/unit.module#UnitModule',
  },
  { path: '',
    redirectTo: '/request/my',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
