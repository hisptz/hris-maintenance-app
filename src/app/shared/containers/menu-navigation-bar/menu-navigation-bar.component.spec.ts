import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavigationBarComponent } from './menu-navigation-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { FieldDataEntryComponent } from 'src/app/pages/fields/components/field-data-entry/field-data-entry.component';
import { MatFormFieldModule } from '@angular/material';

describe('MenuNavigationBarComponent', () => {
  let component: MenuNavigationBarComponent;
  let fixture: ComponentFixture<MenuNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNavigationBarComponent ],
      imports: [RouterModule, RouterTestingModule, MatFormFieldModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
