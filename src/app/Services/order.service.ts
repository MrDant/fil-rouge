import { Injectable } from "@angular/core";
import {NEVER, Observable} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Product } from "../Models/product";
import { Order } from "../Models/order";
import {catchError, tap} from "rxjs/operators";
import {NotifierType} from "../_core/utils/utils";
import {NotifierService} from "angular-notifier";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(private http: HttpClient, private notifier: NotifierService) {}

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
    return this.http.post<boolean>("/order/buy", {}).pipe(
      tap(() => this.notifier.notify(NotifierType.SUCCESS, "Commande envoyée au service, vous recevrez les informations par mail"),
      catchError(error => {
        this.notifier.notify(NotifierType.ERROR, error.error.message || "Une erreur est survenue");
        return NEVER;
      })));
  }
}
