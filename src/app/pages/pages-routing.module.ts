import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'hris-web-all', pathMatch: 'full' },
  // { path: 'hris-web-all', component: HomeComponent },
  // { path: 'hris-web-fields', component: FieldsComponent },
  // { path: 'hris-web-dataEntry', component: EntryFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
