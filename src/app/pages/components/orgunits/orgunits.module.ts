import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgunitsRoutingModule } from './orgunits-routing.module';
import { OrgunitsComponent } from './orgunits.component';

@NgModule({
  declarations: [OrgunitsComponent],
  imports: [
    CommonModule,
    OrgunitsRoutingModule
  ]
})
export class OrgunitsModule { }
