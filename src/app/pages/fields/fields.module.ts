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
  MatSnackBarModule,
  MatCardModule,
  MatButtonModule,
} from '@angular/material';
import { ProgressBarComponent } from 'src/app/shared/components/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from 'src/app/shared/components/progress-spinner/progress-spinner.component';
import { FieldFormComponent } from './components/field-form/field-form.component';
import { SearchByNamePipe } from './pipes/search-by-name/search-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { SelectionComponent } from './components/selection/selection.component';
import { FormHeaderComponent } from 'src/app/shared/components/form-header/form-header.component';

@NgModule({
  declarations: [
    FieldComponent,
    MainContentComponent,
    ContentAreaComponent,
    ListViewComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    FieldFormComponent,
    SearchByNamePipe,
    SelectionComponent,
    FormHeaderComponent
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
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class FieldsModule {}
