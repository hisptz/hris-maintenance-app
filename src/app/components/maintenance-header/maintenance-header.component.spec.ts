import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceHeaderComponent } from './maintenance-header.component';

describe('MaintenanceHeaderComponent', () => {
  let component: MaintenanceHeaderComponent;
  let fixture: ComponentFixture<MaintenanceHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
