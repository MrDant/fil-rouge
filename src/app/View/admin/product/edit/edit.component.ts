import { Component, OnInit } from "@angular/core";
import { Product } from "../../../../Models/product";
import { ProductService } from "../../../../Services/product.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService
      .get(this.activatedRoute.snapshot.params.id)
      .subscribe((product) => {
        this.product = product;
      });
  }

  updateProduct(product: Product): void {
    product.id = this.product.id;
    this.productService.update(product).subscribe(() => {
      this.router.navigate(["/admin/products"]);
    });
  }
}
