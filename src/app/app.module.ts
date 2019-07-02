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

import { AllMaintenanceOptionsComponent } from './container/all-maintenance-options/all-maintenance-options.component';
import { MaintenanceFieldsComponent } from './container/maintenance-fields/maintenance-fields.component';
import { MaintenanceFormsComponent } from './container/maintenance-forms/maintenance-forms.component';
import { MaintenanceOrgunitsComponent } from './container/maintenance-orgunits/maintenance-orgunits.component';
import { MaintenanceOthersComponent } from './container/maintenance-others/maintenance-others.component';
import { FieldsModule } from './container/maintenance-fields/fields.module';
import { OrgunitsModule } from './container/maintenance-orgunits/orgunits.module';
import { FormsModule } from './container/maintenance-forms/components/forms.module';
import { OthersModule } from './container/maintenance-others/others.module';
import { MaintenanceReportsComponent } from './container/maintenance-reports/maintenance-reports.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MaintenanceMenuComponent,
    AllMaintenanceOptionsComponent,
    MaintenanceFieldsComponent,
    MaintenanceFormsComponent,
    MaintenanceOrgunitsComponent,
    MaintenanceOthersComponent,
    MaintenanceReportsComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FieldsModule,
    OthersModule,
    FormsModule,
    OrgunitsModule,
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
