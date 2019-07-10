import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuServicesComponent } from './components/menu-services/menu-services.component';

// Import: Angular Materials Dependencies
import { MatRippleModule } from '@angular/material/core';
import { SharedRoutingModule } from './shared-routing.module';
// import { MenuAsideComponent } from './components/menu-aside/menu-aside.component';
import { MenuContainersComponent } from './components/menu-containers/menu-containers.component';
import { ListViewComponent } from './components/list-view/list-view.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
// import { ContentAreaComponent } from './components/content-area/content-area.component';
// import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MainContentAreaComponent } from './components/main-content-area/main-content-area.component';
import { MainContentContainerComponent } from './components/main-content-container/main-content-container.component';
import { MainSideMenuComponent } from './components/main-side-menu/main-side-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressLoaderComponent } from './components/progress-loader/progress-loader.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    MenuHeaderComponent,
    MenuServicesComponent,
    // MenuAsideComponent,
    MenuContainersComponent,
    ListViewComponent,
    // ContentAreaComponent,
    // SideMenuComponent,
    MainContentAreaComponent,
    MainContentContainerComponent,
    MainSideMenuComponent,
    ProgressLoaderComponent,
    ProgressBarComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatRippleModule,
    SharedRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  exports: [
    MenuHeaderComponent,
    MenuServicesComponent,
    // MenuAsideComponent,
    ListViewComponent,
    MainContentContainerComponent,
    // ProgressBarComponent,
  ],
})
export class SharedModule {}
