import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgunitsComponent } from './orgunits.component';

describe('OrgunitsComponent', () => {
  let component: OrgunitsComponent;
  let fixture: ComponentFixture<OrgunitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgunitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
