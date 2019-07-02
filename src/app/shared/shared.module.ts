import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuServicesComponent } from './components/menu-services/menu-services.component';


// Import: Angular Materials Dependencies
import { MatRippleModule } from '@angular/material/core';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [MenuHeaderComponent, MenuServicesComponent],
  imports: [CommonModule, MatRippleModule, SharedRoutingModule],
  exports: [MenuHeaderComponent, MenuServicesComponent],
})
export class SharedModule {}
