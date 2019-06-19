import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';

import { MaintenanceMenuComponent } from './components/maintenance-menu/maintenance-menu.component';
import { AllMaintenanceOptionsComponent } from './container/all-maintenance-options/all-maintenance-options.component';
import { MaintenanceFieldsComponent } from './container/maintenance-fields/maintenance-fields.component';
import { MaintenanceFiltersComponent } from './container/maintenance-filters/maintenance-filters.component';
import { MaintenanceFormsComponent } from './container/maintenance-forms/maintenance-forms.component';
import { MaintenanceOrgunitsComponent } from './container/maintenance-orgunits/maintenance-orgunits.component';
import { MaintenanceOthersComponent } from './container/maintenance-others/maintenance-others.component';
import { MaintenanceHeaderComponent } from './components/maintenance-header/maintenance-header.component';

const appRoutes: Routes = [
  { path: 'all', component: AllMaintenanceOptionsComponent },
  { path: 'fields', component: MaintenanceFieldsComponent },
  { path: 'filters', component: MaintenanceFiltersComponent },
  { path: 'forms', component: MaintenanceFormsComponent },
  { path: 'organizationUnits', component: MaintenanceOrgunitsComponent },
  { path: 'others', component: MaintenanceOthersComponent },
];
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
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
