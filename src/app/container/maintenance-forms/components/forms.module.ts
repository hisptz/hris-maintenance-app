import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms/forms.component';

import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [FormsComponent],
  imports: [CommonModule, FormsRoutingModule, MatRippleModule],
})
export class FormsModule {}
