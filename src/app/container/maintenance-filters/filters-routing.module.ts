import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelationalFiltersComponent } from './components/relational-filters/relational-filters.component';
import { FriendlyReportsComponent } from './components/friendly-reports/friendly-reports.component';
import { ArthmeticFiltersComponent } from './components/arthmetic-filters/arthmetic-filters.component';

const routes: Routes = [
  {
    path: 'filters',
    component: RelationalFiltersComponent,
    children: [
      {
        path: ':name',
        component: RelationalFiltersComponent,
      },
      {
        path: ':name',
        component: ArthmeticFiltersComponent,
      },
      {
        path: ':name',
        component: FriendlyReportsComponent,
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltersRoutingModule { }
