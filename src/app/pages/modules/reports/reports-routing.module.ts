import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuContainersComponent } from 'src/app/shared/components/menu-containers/menu-containers.component';
import { ReportsComponent } from './reports.component';
import { MainContentAreaComponent } from 'src/app/shared/components/main-content-area/main-content-area.component';

const routes: Routes = [
  {
    path: 'reports',
    component: ReportsComponent,
    children: [
      {
        path: ':name',
        component: MainContentAreaComponent
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
