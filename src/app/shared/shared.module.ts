import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import: Angular Materials Dependencies
import { MatRippleModule } from '@angular/material/core';
import { SharedRoutingModule } from './shared-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatRippleModule,
    SharedRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [],
})
export class SharedModule {}
