import { Component, OnInit } from "@angular/core";
import { OrderService } from "../../Services/order.service";
import { OrderItem } from "../../Models/order";
import { ProductService } from "../../Services/product.service";
import { Product } from "../../Models/product";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  items: OrderItem[];
  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.orderService.currentCart().subscribe((e) => {
      this.items = [];
      e.orderItems.forEach((item) => {
        this.productService.get(item.product_id).subscribe((p) => {
          item.product = new Product(p);
          this.items.push(item);
        });
      });
    });
  }

  calculatePrice(): number {
    return this.items.reduce((a, b) => a + b.product.price, 0);
  }

  buy(): void {
    this.orderService.buy().subscribe(() => this.router.navigate(["/"]));
  }
}
