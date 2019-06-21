import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material';

import { MaintenanceMenuComponent } from './components/maintenance-menu/maintenance-menu.component';
import { MaintenanceHeaderComponent } from './components/maintenance-header/maintenance-header.component';

import { AllMaintenanceOptionsComponent } from './container/all-maintenance-options/all-maintenance-options.component';
import { MaintenanceFieldsComponent } from './container/maintenance-fields/maintenance-fields.component';
import { MaintenanceFiltersComponent } from './container/maintenance-filters/maintenance-filters.component';
import { MaintenanceFormsComponent } from './container/maintenance-forms/maintenance-forms.component';
import { MaintenanceOrgunitsComponent } from './container/maintenance-orgunits/maintenance-orgunits.component';
import { MaintenanceOthersComponent } from './container/maintenance-others/maintenance-others.component';
import { RelationalFiltersComponent } from './container/maintenance-filters/components/relational-filters/relational-filters.component';
import { ArthmeticFiltersComponent } from './container/maintenance-filters/components/arthmetic-filters/arthmetic-filters.component';
import { FriendlyReportsComponent } from './container/maintenance-filters/components/friendly-reports/friendly-reports.component';

import { FiltersModule } from './container/maintenance-filters/filters.module';
import { FieldsModule } from './container/maintenance-fields/fields.module';


@NgModule({
  declarations: [
    AppComponent,
    MaintenanceMenuComponent,
    AllMaintenanceOptionsComponent,
    MaintenanceFieldsComponent,
    MaintenanceFiltersComponent,
    MaintenanceFormsComponent,
    MaintenanceOrgunitsComponent,
    MaintenanceOthersComponent,
    MaintenanceHeaderComponent,
    RelationalFiltersComponent,
    ArthmeticFiltersComponent,
    FriendlyReportsComponent,
  ],
  imports: [
    BrowserModule,
    FieldsModule,
    FiltersModule,
    AppRoutingModule,
    MatToolbarModule,
    NgbPaginationModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
