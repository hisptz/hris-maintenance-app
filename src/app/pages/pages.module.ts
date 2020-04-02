import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SharedComponents } from '../shared/components';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, PagesRoutingModule, MatRippleModule, NgxSpinnerModule],
  exports: [],
})
export class PagesModule {}
