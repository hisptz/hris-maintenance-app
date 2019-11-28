import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAreaComponent } from './content-area.component';
import {
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatRippleModule,
  MatProgressBarModule,
  MatTableModule,
  MatInputModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { ListViewComponent } from '../list-view/list-view.component';
import { SharedModule } from '../../shared.module';
import { FieldFormComponent } from 'src/app/pages/fields/components/field-form/field-form.component';
import { SearchByNamePipe } from 'src/app/pages/fields/pipes/search-by-name/search-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { FormHeaderComponent } from '../../components/form-header/form-header.component';
import { SelectionComponent } from 'src/app/pages/fields/components/selection/selection.component';

describe('ContentAreaComponent', () => {
  let component: ContentAreaComponent;
  let fixture: ComponentFixture<ContentAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContentAreaComponent,
        ListViewComponent,
        ProgressBarComponent,
        FieldFormComponent,
        SearchByNamePipe,
        FormHeaderComponent,
        SelectionComponent
      ],
      imports: [
        RouterModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        RouterTestingModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatTableModule,
        MatMenuModule,
        MatPaginatorModule,
        SharedModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
