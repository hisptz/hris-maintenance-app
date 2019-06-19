import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceFiltersComponent } from './maintenance-filters.component';

describe('MaintenanceFiltersComponent', () => {
  let component: MaintenanceFiltersComponent;
  let fixture: ComponentFixture<MaintenanceFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
