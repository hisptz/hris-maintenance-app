import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReportsComponent } from './components/reports/reports.component';
import { FieldsComponent } from './components/fields/fields.component';

@NgModule({
  declarations: [ReportsComponent, FieldsComponent],
  imports: [CommonModule, SharedModule, PagesRoutingModule, MatRippleModule],
  exports: [],
})
export class PagesModule { }
