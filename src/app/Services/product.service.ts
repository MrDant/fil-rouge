import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Product } from "../Models/product";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>("/catalog/products")
      .pipe(
        map((e) => e["hydra:member"].map((product) => new Product(product)))
      );
  }

  getProductDetails(id: number): Observable<Product> {
    return this.http
      .get<Product>("/catalog/products/" + id)
      .pipe(map((e) => new Product(e)));
  }
}
