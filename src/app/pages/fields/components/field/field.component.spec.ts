import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldComponent } from './field.component';
import { MainContentComponent } from 'src/app/shared/containers/main-content/main-content.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ContentAreaComponent } from 'src/app/shared/containers/content-area/content-area.component';
import { ProgressSpinnerComponent } from 'src/app/shared/components/progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from 'src/app/shared/components/progress-bar/progress-bar.component';
import { ListViewComponent } from 'src/app/shared/containers/list-view/list-view.component';
import { MaintenanceService } from 'src/app/core/services/maintenance.service';
import {
  MatFormFieldModule,
  MatRippleModule,
  MatMenuModule,
  MatPaginatorModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatProgressBarModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('FieldComponent', () => {
  let component: FieldComponent;
  let fixture: ComponentFixture<FieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FieldComponent,
        MainContentComponent,
        ContentAreaComponent,
        ProgressSpinnerComponent,
        ListViewComponent,
        ProgressBarComponent
      ],
      imports: [
        HttpClientModule,
        RouterModule,
        RouterTestingModule,
        MatFormFieldModule,
        MatRippleModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatProgressBarModule
      ],
      providers: [MaintenanceService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
