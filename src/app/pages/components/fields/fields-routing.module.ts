import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldsComponent } from './fields.component';
import { MenuContainersComponent } from 'src/app/shared/components/menu-containers/menu-containers.component';
import { AllMaintenanceOptionsComponent } from 'src/app/container/all-maintenance-options/all-maintenance-options.component';
import { MaintenanceReportsComponent } from 'src/app/container/maintenance-reports/maintenance-reports.component';
import { MaintenanceFormsComponent } from 'src/app/container/maintenance-forms/maintenance-forms.component';
import { MaintenanceOrgunitsComponent } from 'src/app/container/maintenance-orgunits/maintenance-orgunits.component';
import { MaintenanceOthersComponent } from 'src/app/container/maintenance-others/maintenance-others.component';

const routes: Routes = [
  {
    path: 'fields',
    component: FieldsComponent,
    children: [
      {
        path: ':name',
        component: MenuContainersComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldsRoutingModule {}
