import { NgModule } from '@angular/core';
import { FieldsModule } from './modules/fields/fields.module';
import { RouterModule, Routes } from '@angular/router';
// import { MenuContainerComponent } from '../shared/components/menu-container/menu-container.component';
import { AllMaintenanceOptionsComponent } from '../container/all-maintenance-options/all-maintenance-options.component';
import { FieldsComponent } from './modules/fields/fields.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { FormsComponent } from './modules/forms/forms.component';
import { OrgunitsComponent } from './modules/orgunits/orgunits.component';
import { OthersComponent } from './modules/others/others.component';

const routes: Routes = [
  { path: 'all', component: AllMaintenanceOptionsComponent },
  { path: 'fields', component: FieldsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'organizationUnits', component: OrgunitsComponent },
  { path: 'others', component: OthersComponent },
];

@NgModule({
  imports: [FieldsModule, RouterModule.forChild(routes)],
  exports: [RouterModule, FieldsModule],
})
export class PagesRoutingModule {}
