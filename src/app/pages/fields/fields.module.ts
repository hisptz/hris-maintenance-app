import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldsRoutingModule } from './fields-routing.module';
import { FieldComponent } from './components/field/field.component';
import { MainContentComponent } from 'src/app/shared/containers/main-content/main-content.component';
import { RouterModule } from '@angular/router';
import { ContentAreaComponent } from 'src/app/shared/containers/content-area/content-area.component';
import { ListViewComponent } from 'src/app/shared/containers/list-view/list-view.component';
import {
  MatMenuModule,
  MatRippleModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
} from '@angular/material';
import { ProgressBarComponent } from 'src/app/shared/components/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from 'src/app/shared/components/progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [
    FieldComponent,
    MainContentComponent,
    ContentAreaComponent,
    ListViewComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FieldsRoutingModule,
    MatMenuModule,
    MatTableModule,
    MatRippleModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTableModule,
    MatSnackBarModule,
  ]
})
export class FieldsModule {}
