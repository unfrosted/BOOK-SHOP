import { Injectable } from '@angular/core';
import { CartItemModel } from '../models/cart-item.model';
import { BookModel } from 'src/app/products/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems: Array<CartItemModel>;

  constructor() {
    this.cartItems = new Array<CartItemModel>();
   }

   incQuantity(cartItem: CartItemModel, amount: number = 1) {
      const idx = this.getIndex(cartItem.id);
      this.cartItems[idx].quantity += amount;
   }

   decQuantity(cartItem: CartItemModel, amount: number = 1) {
    const idx = this.getIndex(cartItem.id);
    if (this.cartItems[idx].quantity > 1) {
      this.cartItems[idx].quantity -= amount;
    }

  }

   getCartItems(): Array<CartItemModel> {
     return this.cartItems;
   }

   private getIndex(idx: number): any {
    return this.cartItems.findIndex(p => p.id === idx);
   }

   addToCart(book: BookModel) {
      const idx = this.getIndex(book.id);
      if (idx === -1) {
          let cartItem: CartItemModel;
          cartItem = Object.assign({quantity: 1}, book);
          this.cartItems.push(cartItem);
      } else {
          
          this.incQuantity(this.cartItems[idx])
      }
   }

   delFromCart(cartItem: CartItemModel) {
      this.cartItems.slice(1, this.getIndex(cartItem.id));
   }

   updateTotals() {}


}
