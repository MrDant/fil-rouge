import { Component, OnInit } from '@angular/core';
import { Category } from '../../Models/category';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  categories: Category[];

  constructor() { }

  ngOnInit(): void {
    this.categories = [{
      name: "paroi de douche",
      image: "../../../../assets/paroi-de-douche.jpg",
      details:""
    },
  {
    name: "cheminée",
    image: "../../../../assets/cheminee.jpg",
    details:""
  },
  {
    name: "baie vitrée",
    image: "../../../../assets/baie-vitree.jpg",
    details:""
  }
]
  }

}
