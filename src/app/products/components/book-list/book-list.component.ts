import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public booksP: Promise<Array<BookModel>>;

  constructor(private booksService: BooksService, private cartService: CartService) {

   }

  ngOnInit() {

    this.booksP = this.booksService.getBooksAsync();
  }

  onBuy(book: BookModel) {
    this.cartService.addToCart(book);
  }



}
