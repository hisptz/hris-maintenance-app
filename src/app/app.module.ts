import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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
import { MaintenanceOthersComponent } from './container/maintenance-others/maintenance-others.component';
import { OthersModule } from './container/maintenance-others/others.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { FieldsModule } from './pages/components/fields/fields.module';
import { ReportsModule } from './pages/components/reports/reports.module';
import { FormsModule } from './pages/components/forms/forms.module';

@NgModule({
  declarations: [
    AppComponent,
    AllMaintenanceOptionsComponent,
    MaintenanceOthersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    PagesModule,
    FieldsModule,
    ReportsModule,
    FormsModule,
    OthersModule,
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
export class AppModule { }
