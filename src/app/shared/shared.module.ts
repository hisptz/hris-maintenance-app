import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatTableModule,
    MatRippleModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: []
})
export class SharedModule { }
