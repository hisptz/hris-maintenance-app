import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAreaComponent } from './content-area.component';
import { MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule, MatFormFieldModule, MatRippleModule, MatProgressBarModule, MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { ListViewComponent } from '../list-view/list-view.component';
import { SharedModule } from '../../shared.module';

describe('ContentAreaComponent', () => {
  let component: ContentAreaComponent;
  let fixture: ComponentFixture<ContentAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentAreaComponent, ListViewComponent, ProgressBarComponent ],
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
        SharedModule]
    })
    .compileComponents();
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
