import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendlyReportsComponent } from './friendly-reports.component';

describe('FriendlyReportsComponent', () => {
  let component: FriendlyReportsComponent;
  let fixture: ComponentFixture<FriendlyReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendlyReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendlyReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
