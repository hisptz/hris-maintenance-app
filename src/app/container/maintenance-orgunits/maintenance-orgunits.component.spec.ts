import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceOrgunitsComponent } from './maintenance-orgunits.component';

describe('MaintenanceOrgunitsComponent', () => {
  let component: MaintenanceOrgunitsComponent;
  let fixture: ComponentFixture<MaintenanceOrgunitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceOrgunitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceOrgunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
