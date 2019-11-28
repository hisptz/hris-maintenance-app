import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldFormComponent } from './field-form.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaintenanceService } from 'src/app/core/services/maintenance.service';
import { FormsModule } from '@angular/forms';
import { SearchByNamePipe } from '../../pipes/search-by-name/search-by-name.pipe';
import { SelectionComponent } from '../selection/selection.component';

describe('FieldFormComponent', () => {
  let component: FieldFormComponent;
  let fixture: ComponentFixture<FieldFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldFormComponent, SearchByNamePipe, SelectionComponent],
      imports: [
        MatFormFieldModule,
        HttpClientTestingModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule
      ],
      providers: [MaintenanceService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
