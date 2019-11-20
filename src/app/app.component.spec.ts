import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HrisMenuModule } from '@iapps/hris-menu';
import { HttpClientModule } from '@angular/common/http';
import { MenuNavigationBarComponent } from './shared/containers/menu-navigation-bar/menu-navigation-bar.component';
import { FieldsModule } from './pages/fields/fields.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HrisMenuModule,
        HttpClientModule,
        FieldsModule
      ],
      declarations: [
        AppComponent,
        MenuNavigationBarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
