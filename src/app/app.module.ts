import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material';
import { AllMaintenanceOptionsComponent } from './container/all-maintenance-options/all-maintenance-options.component';
import { MaintenanceFormsComponent } from './container/maintenance-forms/maintenance-forms.component';
import { MaintenanceOrgunitsComponent } from './container/maintenance-orgunits/maintenance-orgunits.component';
import { MaintenanceOthersComponent } from './container/maintenance-others/maintenance-others.component';
import { OrgunitsModule } from './container/maintenance-orgunits/orgunits.module';
import { FormsModule } from './container/maintenance-forms/components/forms.module';
import { OthersModule } from './container/maintenance-others/others.module';
import { MaintenanceReportsComponent } from './container/maintenance-reports/maintenance-reports.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { FieldsModule } from './pages/components/fields/fields.module';

@NgModule({
  declarations: [
    AppComponent,
    AllMaintenanceOptionsComponent,
    MaintenanceFormsComponent,
    MaintenanceOrgunitsComponent,
    MaintenanceOthersComponent,
    MaintenanceReportsComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule,
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
