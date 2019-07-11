import { NgModule } from '@angular/core';
import { FieldsModule } from './modules/fields/fields.module';
import { RouterModule, Routes } from '@angular/router';
import { AllMaintenanceOptionsComponent } from '../container/all-maintenance-options/all-maintenance-options.component';
import { FieldsComponent } from './modules/fields/fields.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { FormsComponent } from './modules/forms/forms.component';
import { OrgunitsComponent } from './modules/orgunits/orgunits.component';
import { OthersComponent } from './modules/others/others.component';
import { OthersModule } from './modules/others/others.module';
import { ReportsModule } from './modules/reports/reports.module';
import { OrgunitsModule } from './modules/orgunits/orgunits.module';
import { FormsModule } from './modules/forms/forms.module';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: AllMaintenanceOptionsComponent },
  { path: 'fields', component: FieldsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'organizationUnits', component: OrgunitsComponent },
  { path: 'others', component: OthersComponent },
];

@NgModule({
  imports: [FieldsModule, RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    FieldsModule,
    OthersModule,
    ReportsModule,
    OrgunitsModule,
    FormsModule,
  ],
})
export class PagesRoutingModule {}
