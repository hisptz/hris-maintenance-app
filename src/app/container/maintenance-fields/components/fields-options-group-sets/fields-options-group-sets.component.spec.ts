import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsOptionsGroupSetsComponent } from './fields-options-group-sets.component';

describe('FieldsOptionsGroupSetsComponent', () => {
  let component: FieldsOptionsGroupSetsComponent;
  let fixture: ComponentFixture<FieldsOptionsGroupSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsOptionsGroupSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsOptionsGroupSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
