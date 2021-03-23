import { Component, OnInit } from "@angular/core";
import { Product } from "../../Models/product";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../Services/product.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
  products: Product[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService
      .getProductByCategoryId(this.route.snapshot.params.id)
      .subscribe((data) => (this.products = data));
  }
}
