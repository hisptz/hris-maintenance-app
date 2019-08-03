import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgunitsComponent } from './orgunits.component';
import { MainContentAreaComponent } from 'src/app/shared/components/main-content-area/main-content-area.component';

const routes: Routes = [
  {
    path: 'hris-web-organizationUnits',
    component: OrgunitsComponent,
    children: [
      {
        path: ':name',
        component: MainContentAreaComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgunitsRoutingModule { }
