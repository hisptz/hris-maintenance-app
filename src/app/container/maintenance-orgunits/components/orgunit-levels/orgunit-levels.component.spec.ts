import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgunitLevelsComponent } from './orgunit-levels.component';

describe('OrgunitLevelsComponent', () => {
  let component: OrgunitLevelsComponent;
  let fixture: ComponentFixture<OrgunitLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgunitLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgunitLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
