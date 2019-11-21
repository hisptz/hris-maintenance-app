import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentComponent } from './main-content.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { MaintenanceService } from 'src/app/core/services/maintenance.service';
import { ContentAreaComponent } from '../content-area/content-area.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { ListViewComponent } from '../list-view/list-view.component';
import {
  MatRippleModule,
  MatTableModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatFormFieldModule
} from '@angular/material';
import { ObserversModule } from '@angular/cdk/observers';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared.module';

describe('MainContentComponent', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainContentComponent,
        ContentAreaComponent,
        ProgressBarComponent,
        ListViewComponent
      ],
      imports: [
        HttpClientModule,
        MatFormFieldModule,
        RouterModule,
        RouterTestingModule,
        ObserversModule,
        MatRippleModule,
        MatTableModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatPaginatorModule
      ],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
