import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirModule } from '../common/dir/dir.module';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule,
    DirModule
  ],
  declarations: [
    BookComponent,
    BookListComponent
  ],
  exports: [
    BookListComponent
  ]

})
export class ProductsModule {  }
