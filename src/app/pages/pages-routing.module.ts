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
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: HomeComponent },
  { path: 'fields', component: FieldsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'organizationUnits', component: OrgunitsComponent },
  { path: 'others', component: OthersComponent },
  { path: 'dataEntry', component: EntryFormComponent },
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
