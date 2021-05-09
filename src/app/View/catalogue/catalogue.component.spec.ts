import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";

import { CatalogueComponent } from "./catalogue.component";
import { ProductService } from "../../Services/product.service";
import { Observable, of } from "rxjs";
import { Category } from "../../Models/category";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SpyLocation } from "@angular/common/testing";

class ProductServiceMock {
  getCategories(): Observable<Category[]> {
    return of([
      { id: 1, name: "Titre 1", image: "image 1" },
      { id: 2, name: "Titre 2", image: "image 2" },
    ]);
  }
}

describe("CatalogueComponent", () => {
  let component: CatalogueComponent;
  let fixture: ComponentFixture<CatalogueComponent>;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ProductService, useClass: ProductServiceMock },
        { provide: Location, useClass: SpyLocation },
      ],
      declarations: [CatalogueComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    location = TestBed.get(Location);
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("nb Category", () => {
    expect(component.categories.length).toEqual(2);
    const elements = fixture.debugElement.nativeElement.querySelectorAll(
      ".category"
    );
    expect(Object.keys(elements).length).toEqual(2);
  });

  it("good title", () => {
    const elements = fixture.debugElement.nativeElement.querySelectorAll(
      ".category h3"
    );
    expect(elements[0].innerHTML).toEqual("Titre 1");
    expect(elements[1].innerHTML).toEqual("Titre 2");
  });
});
