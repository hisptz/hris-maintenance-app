import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsOptionsGroupsComponent } from './fields-options-groups.component';

describe('FieldsOptionsGroupsComponent', () => {
  let component: FieldsOptionsGroupsComponent;
  let fixture: ComponentFixture<FieldsOptionsGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsOptionsGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsOptionsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
