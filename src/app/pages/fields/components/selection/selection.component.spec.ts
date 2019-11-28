import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SelectionComponent } from "./selection.component";
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { SearchByNamePipe } from "../../pipes/search-by-name/search-by-name.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("SelectionComponent", () => {
  let component: SelectionComponent;
  let fixture: ComponentFixture<SelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionComponent, SearchByNamePipe],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
