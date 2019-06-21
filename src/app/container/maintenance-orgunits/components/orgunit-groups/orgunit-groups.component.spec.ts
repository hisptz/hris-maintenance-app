import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgunitGroupsComponent } from './orgunit-groups.component';

describe('OrgunitGroupsComponent', () => {
  let component: OrgunitGroupsComponent;
  let fixture: ComponentFixture<OrgunitGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgunitGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgunitGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
