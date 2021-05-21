import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../Services/product.service";
import { Product } from "../../Models/product";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  products: Product[];
  current = 0;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((e) => (this.products = e));
  }

  next(): void {
    this.current++;
    if (this.current >= this.products.length) {
      this.current = 0;
    }
  }

  prev(): void {
    this.current--;
    if (this.current < 0) {
      this.current = this.products.length - 1;
    }
  }
}
