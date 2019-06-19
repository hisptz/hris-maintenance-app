import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMaintenanceOptionsComponent } from './all-maintenance-options.component';

describe('AllMaintenanceOptionsComponent', () => {
  let component: AllMaintenanceOptionsComponent;
  let fixture: ComponentFixture<AllMaintenanceOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMaintenanceOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMaintenanceOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
