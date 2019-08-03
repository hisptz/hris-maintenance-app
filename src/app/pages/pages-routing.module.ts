import { NgModule } from '@angular/core';
import { FieldsModule } from './modules/fields/fields.module';
import { RouterModule, Routes } from '@angular/router';
import { FieldsComponent } from './modules/fields/fields.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { FormsComponent } from './modules/forms/forms.component';
import { OrgunitsComponent } from './modules/orgunits/orgunits.component';
import { OthersComponent } from './modules/others/others.component';
import { OthersModule } from './modules/others/others.module';
import { ReportsModule } from './modules/reports/reports.module';
import { OrgunitsModule } from './modules/orgunits/orgunits.module';
import { FormsModule } from './modules/forms/forms.module';
import { HomeModule } from './modules/home/home.module';
import { HomeComponent } from './modules/home/home.component';
import { EntryFormComponent } from '../shared/components/entry-form/entry-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'hris-web-all', pathMatch: 'full' },
  { path: 'hris-web-all', component: HomeComponent },
  { path: 'hris-web-fields', component: FieldsComponent },
  { path: 'hris-web-reports', component: ReportsComponent },
  { path: 'hris-web-forms', component: FormsComponent },
  { path: 'hris-web-organizationUnits', component: OrgunitsComponent },
  { path: 'hris-web-others', component: OthersComponent },
  { path: 'hris-web-dataEntry', component: EntryFormComponent },
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
    HomeModule,
  ],
})
export class PagesRoutingModule {}
