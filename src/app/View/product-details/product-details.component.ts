import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product'
import { ProductService } from '../../Services/product.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product

  constructor(private productService:ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.productService.getProductDetails(params.id).subscribe(data=>this.product = data));
  }

}
