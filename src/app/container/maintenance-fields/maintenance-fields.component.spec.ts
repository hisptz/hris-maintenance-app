import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceFieldsComponent } from './maintenance-fields.component';

describe('MaintenanceFieldsComponent', () => {
  let component: MaintenanceFieldsComponent;
  let fixture: ComponentFixture<MaintenanceFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
