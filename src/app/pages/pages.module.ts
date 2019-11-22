import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SharedComponents } from '../shared/components';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, PagesRoutingModule, MatRippleModule],
  exports: [],
})
export class PagesModule {}
