import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { Product } from "../Models/product"
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root",
  })

export class ProductService {

    constructor(private http: HttpClient, private router: Router) {}

    getProductDetails(id:number): Observable<Product> {
        return this.http.get<Product>("/catalog/products/" + id)
    }
}
  