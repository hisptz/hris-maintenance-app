import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceFormsComponent } from './maintenance-forms.component';

describe('MaintenanceFormsComponent', () => {
  let component: MaintenanceFormsComponent;
  let fixture: ComponentFixture<MaintenanceFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
