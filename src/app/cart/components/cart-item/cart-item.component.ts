import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';
import { BookModel } from 'src/app/products/models/book.model';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent implements OnInit {
   @Input()
   item: CartItemModel;

   @Output()
   decreaseQ: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

   @Output()
   increaseQ: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

   @Output()
   delCartItem: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  ngOnInit() {
  }

  incrQuantity(){
      this.increaseQ.emit(this.item);
  }

  decrQuantity(){
    this.decreaseQ.emit(this.item);
  }

  onDelItem(){
    this.delCartItem.emit(this.item);
  }


}
