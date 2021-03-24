import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Product } from "../Models/product";
import { Order } from "../Models/order";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(private http: HttpClient) {}

  currentCart(): Observable<Order> {
    return this.http.get<Order>("/order");
  }
  list(): Observable<Order[]> {
    return this.http.get<Order[]>("/order/orders");
  }

  add(product: Product, quantity: number): Observable<Product> {
    return this.http.post<Product>("/order/add", {
      product: product.id,
      quantity,
    });
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>("/order/" + id);
  }

  buy(): Observable<boolean> {
    return this.http.post<boolean>("/order/buy", {});
  }
}
