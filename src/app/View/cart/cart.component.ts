import { Component, OnInit } from '@angular/core';
import { Cart } from '../../Models/cart';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Cart;

  constructor() { }

  ngOnInit(): void {
    this.cart= new Cart({
      id: 1,
      items: [{
        id:1,
        name: "test",
        productId: 1,
        price: 650,
        quantity: 2,
        image: "string",
        specifications: []
      }
      ]
    })
  }

}
