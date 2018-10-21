import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  private books: Array<BookModel>;

  constructor() {

   }

  ngOnInit() {
    this.books = [
      {'id': 1, 'name': 'Some Book1', 'img': '//image.shutterstock.com/image-vector/vector-book-icon-450w-380526094.jpg'},
      {'id': 2, 'name': 'Some Book2', 'img': '//image.shutterstock.com/image-vector/vector-book-icon-450w-380526094.jpg'},
      {'id': 3, 'name': 'Some Book2', 'img': '//image.shutterstock.com/image-vector/vector-book-icon-450w-380526094.jpg'}
    ];
  }

  onBuy(book: BookModel) {
    console.log(book);
  }



}
