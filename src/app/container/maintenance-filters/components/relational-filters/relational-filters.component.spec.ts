import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationalFiltersComponent } from './relational-filters.component';

describe('RelationalFiltersComponent', () => {
  let component: RelationalFiltersComponent;
  let fixture: ComponentFixture<RelationalFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationalFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationalFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
