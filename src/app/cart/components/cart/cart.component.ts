import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartItems: Array<CartItemModel>;

  constructor(private cartService: CartService) {

   }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }
onIncreaseQ(item: CartItemModel) {
  this.cartService.decQuantity(item);
  }
onDecreaseQ(item: CartItemModel) {
  this.cartService.incQuantity(item);
}
}
