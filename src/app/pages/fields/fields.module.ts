import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldsRoutingModule } from './fields-routing.module';
import { FieldComponent } from './components/field/field.component';
import { MainContentComponent } from 'src/app/shared/containers/main-content/main-content.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FieldComponent, MainContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    FieldsRoutingModule
  ]
})
export class FieldsModule { }
