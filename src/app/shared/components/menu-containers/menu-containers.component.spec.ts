import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuContainersComponent } from './menu-containers.component';

describe('MenuContainersComponent', () => {
  let component: MenuContainersComponent;
  let fixture: ComponentFixture<MenuContainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuContainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
