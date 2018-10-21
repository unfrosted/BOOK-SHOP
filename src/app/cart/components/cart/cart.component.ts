import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartItems: Array<CartItemModel>;

  constructor() {

   }

  ngOnInit() {
    this.cartItems = [
      {'id': 1, 'name': 'Some Book1', 'img': '//image.shutterstock.com/image-vector/vector-book-icon-450w-380526094.jpg', 'quantity': 1},
      {'id': 2, 'name': 'Some Book2', 'img': '//image.shutterstock.com/image-vector/vector-book-icon-450w-380526094.jpg', 'quantity': 1},
      {'id': 3, 'name': 'Some Book2', 'img': '//image.shutterstock.com/image-vector/vector-book-icon-450w-380526094.jpg', 'quantity': 1}
    ];
  }
onIncreaseQ(item: CartItemModel) {
  const idx = this.cartItems.findIndex(p => p.id === item.id);
  if (this.cartItems[idx].quantity > 0) {
  this.cartItems[idx].quantity--;
  }
}
onDecreaseQ(item: CartItemModel) {
  const idx = this.cartItems.findIndex(p => p.id === item.id);
  this.cartItems[idx].quantity++;
}
}
