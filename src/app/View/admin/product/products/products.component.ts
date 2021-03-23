import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../../Services/product.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  properties = [
    { label: "Nom", key: "name" },
    { label: "Prix", key: "price" },
    { label: "Stock", key: "stock" },
  ];

  constructor(public productService: ProductService) {}

  ngOnInit(): void {}
}
