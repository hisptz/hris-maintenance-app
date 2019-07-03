import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuServicesComponent } from './components/menu-services/menu-services.component';

// Import: Angular Materials Dependencies
import { MatRippleModule } from '@angular/material/core';
import { SharedRoutingModule } from './shared-routing.module';
import { MenuAsideComponent } from './components/menu-aside/menu-aside.component';
import { FieldsComponent } from '../pages/components/fields/fields.component';
import { MenuContainersComponent } from './components/menu-containers/menu-containers.component';
import { ListViewComponent } from './components/list-view/list-view.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [
    MenuHeaderComponent,
    MenuServicesComponent,
    MenuAsideComponent,
    FieldsComponent,
    MenuContainersComponent,
    ListViewComponent,
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    SharedRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [
    MenuHeaderComponent,
    MenuServicesComponent,
    MenuAsideComponent,
    ListViewComponent,
  ],
})
export class SharedModule {}
