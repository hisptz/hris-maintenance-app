import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FieldsGroupsComponent } from './components/fields-groups/fields-groups.component';
import { FieldsOptionsComponent } from './components/fields-options/fields-options.component';
import { FieldsOptionsGroupsComponent } from './components/fields-options-groups/fields-options-groups.component';
import { FieldsOptionsGroupSetsComponent } from './components/fields-options-group-sets/fields-options-group-sets.component';
import { FieldsComponent } from './components/fields/fields.component';

const routes: Routes = [
  { path: 'fields', component: FieldsComponent, children: [
    {
      path: ':name', component: FieldsComponent
    },
    {
      path: ':name', component: FieldsGroupsComponent
    },
    {
      path: ':name', component: FieldsOptionsComponent
    },
    {
      path: ':name', component: FieldsOptionsGroupsComponent
    },
    {
      path: ':name', component: FieldsOptionsGroupSetsComponent
    },
  ] },
  { path: 'filters', component: FieldsGroupsComponent },
  { path: 'forms', component: FieldsOptionsComponent },
  { path: 'organizationUnits', component: FieldsOptionsGroupsComponent },
  { path: 'others', component: FieldsOptionsGroupSetsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldsRoutingModule { }
