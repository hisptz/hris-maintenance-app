import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersRoutingModule } from './others-routing.module';
import { OthersComponent } from './components/others/others.component';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [OthersComponent],
  imports: [
    CommonModule,
    OthersRoutingModule,
    MatRippleModule
  ]
})
export class OthersModule { }
