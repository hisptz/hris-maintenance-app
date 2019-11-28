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
  MatFormFieldModule,
  MatSnackBarModule,
  MatCardModule
} from '@angular/material';
import { ObserversModule } from '@angular/cdk/observers';
import { HttpClientModule } from '@angular/common/http';
import { FieldFormComponent } from 'src/app/pages/fields/components/field-form/field-form.component';
import { SearchByNamePipe } from 'src/app/pages/fields/pipes/search-by-name/search-by-name.pipe';
import { FormsModule } from '@angular/forms';

describe('MainContentComponent', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainContentComponent,
        ContentAreaComponent,
        ProgressBarComponent,
        ListViewComponent,
        FieldFormComponent,
        SearchByNamePipe
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
        MatPaginatorModule,
        MatSnackBarModule,
        MatCardModule,
        FormsModule
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
