import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsGroupsComponent } from './fields-groups.component';

describe('FieldsGroupsComponent', () => {
  let component: FieldsGroupsComponent;
  let fixture: ComponentFixture<FieldsGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
