import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldsRoutingModule } from './fields-routing.module';

import { FieldsGroupsComponent } from './components/fields-groups/fields-groups.component';
import { FieldsOptionsComponent } from './components/fields-options/fields-options.component';
import { FieldsOptionsGroupsComponent } from './components/fields-options-groups/fields-options-groups.component';
import { FieldsOptionsGroupSetsComponent } from './components/fields-options-group-sets/fields-options-group-sets.component';
import { FieldsComponent } from './components/fields/fields.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    FieldsGroupsComponent,
    FieldsOptionsComponent,
    FieldsOptionsGroupsComponent,
    FieldsOptionsGroupSetsComponent,
    FieldsComponent,
  ],
  imports: [CommonModule, FieldsRoutingModule, MatRippleModule],
  exports: [
    FieldsGroupsComponent,
    FieldsOptionsComponent,
    FieldsOptionsGroupsComponent,
    FieldsOptionsGroupSetsComponent,
    FieldsComponent,
  ],
})
export class FieldsModule {}
