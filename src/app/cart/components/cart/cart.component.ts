import { Component, OnInit } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartItems: Array<CartItemModel>;

  constructor() {
    this.cartItems = [
      {'id': 1, 'name': 'Some Book1', 'img': '#', 'quantity': 1},
      {'id': 2, 'name': 'Some Book2', 'img': '#', 'quantity': 1},
      {'id': 3, 'name': 'Some Book2', 'img': '#', 'quantity': 1}
    ];
   }

  ngOnInit() {
  }

}
