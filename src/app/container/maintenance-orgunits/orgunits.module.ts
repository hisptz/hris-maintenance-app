import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgunitsRoutingModule } from './orgunits-routing.module';
import { OrgunitsComponent } from './components/orgunits/orgunits.component';
import { OrgunitGroupsComponent } from './components/orgunit-groups/orgunit-groups.component';
import { OrgunitGroupsetsComponent } from './components/orgunit-groupsets/orgunit-groupsets.component';
import { HierarchyOperationsComponent } from './components/hierarchy-operations/hierarchy-operations.component';
import { OrgunitLevelsComponent } from './components/orgunit-levels/orgunit-levels.component';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [
    OrgunitsComponent,
    OrgunitGroupsComponent,
    OrgunitGroupsetsComponent,
    HierarchyOperationsComponent,
    OrgunitLevelsComponent,
  ],
  imports: [CommonModule, OrgunitsRoutingModule, MatRippleModule],
})
export class OrgunitsModule {}
