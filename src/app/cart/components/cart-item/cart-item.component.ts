import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';
import { BookModel } from 'src/app/products/models/book.model';

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

  constructor() { }

  ngOnInit() {
  }

  incrQuantity(){
      this.increaseQ.emit(this.item);
  }

  decrQuantity(){
    this.decreaseQ.emit(this.item);

  }


}
