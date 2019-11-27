import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldFormComponent } from './field-form.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaintenanceService } from 'src/app/core/services/maintenance.service';

describe('FieldFormComponent', () => {
  let component: FieldFormComponent;
  let fixture: ComponentFixture<FieldFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldFormComponent],
      imports: [
        MatFormFieldModule,
        HttpClientTestingModule,
        MatInputModule,
        BrowserAnimationsModule
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
