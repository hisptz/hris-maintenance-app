import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceOthersComponent } from './maintenance-others.component';

describe('MaintenanceOthersComponent', () => {
  let component: MaintenanceOthersComponent;
  let fixture: ComponentFixture<MaintenanceOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
