import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { StandardReportsComponent } from './components/standard-reports/standard-reports.component';
import { SqlViewReportsComponent } from './components/sql-view-reports/sql-view-reports.component';

@NgModule({
  declarations: [StandardReportsComponent, SqlViewReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
