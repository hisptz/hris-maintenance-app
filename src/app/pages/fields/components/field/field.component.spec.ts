import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldComponent } from './field.component';
import { MainContentComponent } from 'src/app/shared/containers/main-content/main-content.component';
import { RouterModule } from '@angular/router';
import { FieldsRoutingModule } from '../../fields-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('FieldComponent', () => {
  let component: FieldComponent;
  let fixture: ComponentFixture<FieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldComponent, MainContentComponent ],
      imports: [RouterModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
