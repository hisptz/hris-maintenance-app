import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDataEntryComponent } from './field-data-entry.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FieldDataEntryComponent', () => {
  let component: FieldDataEntryComponent;
  let fixture: ComponentFixture<FieldDataEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDataEntryComponent ],
      imports: [MatFormFieldModule, MatInputModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
