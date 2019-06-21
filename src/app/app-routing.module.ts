import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllMaintenanceOptionsComponent } from './container/all-maintenance-options/all-maintenance-options.component';
import { MaintenanceFieldsComponent } from './container/maintenance-fields/maintenance-fields.component';
import { MaintenanceFiltersComponent } from './container/maintenance-filters/maintenance-filters.component';
import { MaintenanceFormsComponent } from './container/maintenance-forms/maintenance-forms.component';
import { MaintenanceOrgunitsComponent } from './container/maintenance-orgunits/maintenance-orgunits.component';
import { MaintenanceOthersComponent } from './container/maintenance-others/maintenance-others.component';
import { FieldsComponent } from './container/maintenance-fields/components/fields/fields.component';

const routes: Routes = [
  { path: 'all', component: AllMaintenanceOptionsComponent },
  { path: 'fields', component: MaintenanceFieldsComponent },
  { path: 'filters', component: MaintenanceFiltersComponent },
  { path: 'forms', component: MaintenanceFormsComponent },
  { path: 'organizationUnits', component: MaintenanceOrgunitsComponent },
  { path: 'others', component: MaintenanceOthersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
