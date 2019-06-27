import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlViewReportsComponent } from './sql-view-reports.component';

describe('SqlViewReportsComponent', () => {
  let component: SqlViewReportsComponent;
  let fixture: ComponentFixture<SqlViewReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlViewReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlViewReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
