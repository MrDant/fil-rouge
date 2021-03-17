import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Product } from "../Models/product";
import { map, tap } from "rxjs/operators";
import { Category } from "../Models/category";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>("/catalog/categories.json")
      .pipe(map((e) => e.map((cat) => new Category(cat))));
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>("/catalog/products")
      .pipe(
        map((e) => e["hydra:member"].map((product) => new Product(product)))
      );
  }

  getProductByCategoryId(id: any) {
    return this.http
      .get<Product[]>(`/catalog/categories/${id}/products`)
      .pipe(
        map((e) => e["hydra:member"].map((product) => new Product(product)))
      );
  }
}
