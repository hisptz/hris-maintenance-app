import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelationalFiltersComponent } from './components/relational-filters/relational-filters.component';
import { FriendlyReportsComponent } from './components/friendly-reports/friendly-reports.component';
import { ArthmeticFiltersComponent } from './components/arthmetic-filters/arthmetic-filters.component';

import { FiltersRoutingModule } from './filters-routing.module';
import { MatRippleModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule, FiltersRoutingModule, MatRippleModule],
  exports: [],
})
export class FiltersModule {}
