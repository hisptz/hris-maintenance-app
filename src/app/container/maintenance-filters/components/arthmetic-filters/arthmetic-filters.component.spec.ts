import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArthmeticFiltersComponent } from './arthmetic-filters.component';

describe('ArthmeticFiltersComponent', () => {
  let component: ArthmeticFiltersComponent;
  let fixture: ComponentFixture<ArthmeticFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArthmeticFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArthmeticFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
