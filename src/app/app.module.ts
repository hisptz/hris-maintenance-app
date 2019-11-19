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
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HrisMenuModule } from '@iapps/hris-menu';
import { SharedContainers } from './shared/containers';


@NgModule({
  declarations: [AppComponent, ...SharedContainers],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    HrisMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
