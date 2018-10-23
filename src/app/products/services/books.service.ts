import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public books: Array<BookModel>;

  constructor() {
    this.books = [
      {'id': 1, 'name': 'Some Book1', 'img': '//image.shutterstock.com/image-vector/vector-book-icon-450w-380526094.jpg', price:10},
      {'id': 2, 'name': 'Some Book2', 'img': '//image.shutterstock.com/image-vector/vector-book-icon-450w-380526094.jpg', price:10},
      {'id': 3, 'name': 'Some Book2', 'img': '//image.shutterstock.com/image-vector/vector-book-icon-450w-380526094.jpg', price:10}
    ];
   }
  getBooksAsync(): Promise<Array<BookModel>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.books);
      }, 10000);
    });
  }

}
