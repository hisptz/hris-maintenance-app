import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyOperationsComponent } from './hierarchy-operations.component';

describe('HierarchyOperationsComponent', () => {
  let component: HierarchyOperationsComponent;
  let fixture: ComponentFixture<HierarchyOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchyOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchyOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
