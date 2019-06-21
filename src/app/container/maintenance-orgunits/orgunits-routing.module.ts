import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrgunitsComponent } from './components/orgunits/orgunits.component';
import { OrgunitGroupsComponent } from './components/orgunit-groups/orgunit-groups.component';
import { OrgunitGroupsetsComponent } from './components/orgunit-groupsets/orgunit-groupsets.component';
import { HierarchyOperationsComponent } from './components/hierarchy-operations/hierarchy-operations.component';
import { OrgunitLevelsComponent } from './components/orgunit-levels/orgunit-levels.component';

const routes: Routes = [
  {
    path: 'organizationUnits',
    component: OrgunitsComponent,
    children: [
      {
        path: ':name',
        component: OrgunitGroupsComponent,
      },
      {
        path: ':name',
        component: OrgunitGroupsetsComponent,
      },
      {
        path: ':name',
        component: HierarchyOperationsComponent,
      },
      {
        path: ':name',
        component: OrgunitLevelsComponent,
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgunitsRoutingModule { }
