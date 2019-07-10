import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReportsComponent } from './modules/reports/reports.component';
import { FieldsComponent } from './modules/fields/fields.component';
import { FormsComponent } from './modules/forms/forms.component';
import { OrgunitsComponent } from './modules/orgunits/orgunits.component';
import { OthersComponent } from './modules/others/others.component';
// import { MenuContainerComponent } from '../shared/components/menu-container/menu-container.component';

@NgModule({
  declarations: [
    ReportsComponent,
    FieldsComponent,
    FormsComponent,
    OrgunitsComponent,
    OthersComponent,
    // MenuContainerComponent,
  ],
  imports: [CommonModule, SharedModule, PagesRoutingModule, MatRippleModule],
  exports: [
    // MenuContainerComponent
  ],
})
export class PagesModule {}
