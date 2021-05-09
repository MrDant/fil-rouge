import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Product } from "../Models/product";
import { map } from "rxjs/operators";
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

  getProductByCategoryId(id: any): Observable<Product[]> {
    return this.http
      .get<Product[]>(`/catalog/categories/${id}/products`)
      .pipe(
        map((e) => e["hydra:member"].map((product) => new Product(product)))
      );
  }
  getProductDetails(id: number): Observable<Product> {
    return this.http
      .get<Product>("/catalog/products/" + id)
      .pipe(map((e) => new Product(e)));
  }

  list(): Observable<Product[]> {
    return this.http
      .get<Product[]>("/catalog/products")
      .pipe(
        map((e) => e["hydra:member"].map((product) => new Product(product)))
      );
  }

  add(product: Product): Observable<Product> {
    return this.http.post<Product>("/catalog/products", product);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>("/catalog/products/" + id);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>("/catalog/products/" + product.id, product);
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>("/catalog/products/" + id);
  }
}
