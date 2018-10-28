import { Injectable } from '@angular/core';
import { CartItemModel } from '../models/cart-item.model';
import { BookModel } from 'src/app/products/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems: Array<CartItemModel>;
  public totalQuantity: number;
  public totalPrice: number;

  constructor() {
    this.cartItems = new Array<CartItemModel>();
    this.totalPrice = 0;
    this.totalQuantity = 0;
   }

   incQuantity(cartItem: CartItemModel, amount: number = 1) {
      const idx = this.getIndex(cartItem.id);
      this.cartItems[idx].quantity += amount;
      this.updateTotals();
   }

   decQuantity(cartItem: CartItemModel, amount: number = 1) {
    const idx = this.getIndex(cartItem.id);
    if (this.cartItems[idx].quantity > 1) {
      this.cartItems[idx].quantity -= amount;
    }
    this.updateTotals();

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
      this.updateTotals();
  }

   delFromCart(cartItem: CartItemModel) {
     const idx = this.getIndex(cartItem.id);
    if (idx !== -1) {
     this.cartItems = this.cartItems.splice(1, idx );
     this.updateTotals();
    }
   }

   updateTotals() {
      let newTotalQuantity = 0;
      let newTotalPrice = 0;
      for (const element of this.cartItems){
        newTotalQuantity += element.quantity;
        newTotalPrice += element.price;
      }
      this.totalPrice = newTotalPrice;
      this.totalQuantity = newTotalQuantity;
   }


}
