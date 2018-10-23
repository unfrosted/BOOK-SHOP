import { BookModel } from 'src/app/products/models/book.model';

export class CartItemModel extends BookModel {
    constructor(
        public id: number,
        public name: string,
        public img: string,
        public quantity: number,
        public price: number
    ) {
        super(id, name, img, price);
    }
}
