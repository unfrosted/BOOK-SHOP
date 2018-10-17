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
    this.books = [
      {'id': 1, 'name': 'Some Book1', 'img': '#'},
      {'id': 2, 'name': 'Some Book2', 'img': '#'},
      {'id': 3, 'name': 'Some Book2', 'img': '#'}
    ];
   }

  ngOnInit() {
  }

}
