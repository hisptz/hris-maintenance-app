import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuServicesComponent } from './components/menu-services/menu-services.component';

// Import: Angular Materials Dependencies
import { MatRippleModule } from '@angular/material/core';
import { SharedRoutingModule } from './shared-routing.module';
import { MenuContainersComponent } from './components/menu-containers/menu-containers.component';
import { ListViewComponent } from './components/list-view/list-view.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MainContentAreaComponent } from './components/main-content-area/main-content-area.component';
import { MainContentContainerComponent } from './components/main-content-container/main-content-container.component';
import { MainSideMenuComponent } from './components/main-side-menu/main-side-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressLoaderComponent } from './components/progress-loader/progress-loader.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { EntryFormComponent } from './components/entry-form/entry-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MenuHeaderComponent,
    MenuServicesComponent,
    MenuContainersComponent,
    ListViewComponent,
    MainContentAreaComponent,
    MainContentContainerComponent,
    MainSideMenuComponent,
    ProgressLoaderComponent,
    ProgressBarComponent,
    EntryFormComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatRippleModule,
    SharedRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MenuHeaderComponent,
    MenuServicesComponent,
    ListViewComponent,
    MainContentContainerComponent,
  ],
})
export class SharedModule {}
