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
import { FieldsModule } from './pages/modules/fields/fields.module';
import { ReportsModule } from './pages/modules/reports/reports.module';
import { FormsModule } from './pages/modules/forms/forms.module';
import { OthersModule } from './pages/modules/others/others.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AppComponent],
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
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
