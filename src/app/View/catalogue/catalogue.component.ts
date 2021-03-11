import { Component, OnInit } from "@angular/core";
import { Category } from "../../Models/category";
import { ProductService } from "../../Services/product.service";
@Component({
  selector: "app-catalogue",
  templateUrl: "./catalogue.component.html",
  styleUrls: ["./catalogue.component.scss"],
})
export class CatalogueComponent implements OnInit {
  categories: Category[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getCategories()
      .subscribe((cat) => (this.categories = cat));
  }
}
