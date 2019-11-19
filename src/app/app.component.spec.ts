import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HrisMenuModule } from '@iapps/hris-menu';
import { HttpClientModule } from '@angular/common/http';
import { MenuServicesComponent } from './shared/components/menu-services/menu-services.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HrisMenuModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        MenuServicesComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
