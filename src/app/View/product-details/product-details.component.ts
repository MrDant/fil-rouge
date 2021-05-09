import { Component, OnInit } from "@angular/core";
import { Product } from "../../Models/product";
import { ProductService } from "../../Services/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { OrderService } from "../../Services/order.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  quantity = 1;

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.productService
        .getProductDetails(params.id)
        .subscribe((data) => (this.product = data))
    );
  }

  addProduct(): void {
    if (this.quantity < 1 || this.quantity > this.product.stock) {
      alert("La quantité est incorrecte");
      return;
    }
    this.orderService.add(this.product, this.quantity).subscribe(() => {
      if (confirm("Voulez-vous voir votre panier ?")) {
        this.router.navigate(["/cart"]);
      }
    });
  }
}
