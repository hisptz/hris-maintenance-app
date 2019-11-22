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
import { MatTabsModule, MatMenuModule, MatSnackBarModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HrisMenuModule } from '@iapps/hris-menu';
import { SharedContainers } from './shared/containers';
import { FieldsModule } from './pages/fields/fields.module';
import { SharedComponents } from './shared/components';

@NgModule({
  declarations: [AppComponent, ...SharedContainers],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule,
    AppRoutingModule,
    MatToolbarModule,
    NgbPaginationModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HrisMenuModule,
    BrowserAnimationsModule,

    // Material Modules
    MatTabsModule,

    // Custom Modules
    FieldsModule,
    MatMenuModule,
    MatRippleModule,

    // Http Client Module
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
