import { Component } from "@angular/core";
import { Product } from "../../../../Models/product";
import { ProductService } from "../../../../Services/product.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent {
  constructor(private productService: ProductService, private router: Router) {}

  addProduct(product: Product): void {
    this.productService.add(product).subscribe(() => {
      this.router.navigate(["/admin/products"]);
    });
  }
}
