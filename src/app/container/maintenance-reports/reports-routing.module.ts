import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceReportsComponent } from './maintenance-reports.component';
import { SqlViewReportsComponent } from './components/sql-view-reports/sql-view-reports.component';
import { StandardReportsComponent } from './components/standard-reports/standard-reports.component';

const routes: Routes = [
  {
    path: 'reports',
    component: MaintenanceReportsComponent,
    children: [
      {
        path: ':name',
        component: SqlViewReportsComponent,
      },
      {
        path: ':name',
        component: StandardReportsComponent,
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
