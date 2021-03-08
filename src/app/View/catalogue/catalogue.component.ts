import { Component, OnInit } from "@angular/core";
import { Category } from "../../Models/category";
@Component({
  selector: "app-catalogue",
  templateUrl: "./catalogue.component.html",
  styleUrls: ["./catalogue.component.scss"],
})
export class CatalogueComponent implements OnInit {
  categories: Category[];

  constructor() {}

  ngOnInit(): void {
    this.categories = [
      {
        name: "paroi de douche",
        img: "../../../../assets/paroi-de-douche.jpg",
        details: "",
      },
      {
        name: "cheminée",
        img: "../../../../assets/cheminee.jpg",
        details: "",
      },
      {
        name: "baie vitrée",
        img: "../../../../assets/baie-vitree.jpg",
        details: "",
      },
    ];
  }
}
