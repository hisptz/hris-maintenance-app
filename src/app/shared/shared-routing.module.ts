import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMaintenanceOptionsComponent } from '../container/all-maintenance-options/all-maintenance-options.component';
import { MaintenanceOrgunitsComponent } from '../container/maintenance-orgunits/maintenance-orgunits.component';
import { MaintenanceOthersComponent } from '../container/maintenance-others/maintenance-others.component';
import { FieldsComponent } from '../pages/components/fields/fields.component';
import { ReportsComponent } from '../pages/components/reports/reports.component';
import { FormsComponent } from '../pages/components/forms/forms.component';

const routes: Routes = [
  { path: 'all', component: AllMaintenanceOptionsComponent },
  { path: 'fields', component: FieldsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'organizationUnits', component: MaintenanceOrgunitsComponent },
  { path: 'others', component: MaintenanceOthersComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule { }
