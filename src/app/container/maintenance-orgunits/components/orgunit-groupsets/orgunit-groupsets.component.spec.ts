import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgunitGroupsetsComponent } from './orgunit-groupsets.component';

describe('OrgunitGroupsetsComponent', () => {
  let component: OrgunitGroupsetsComponent;
  let fixture: ComponentFixture<OrgunitGroupsetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgunitGroupsetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgunitGroupsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
