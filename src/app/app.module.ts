import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { DirModule } from './common/dir/dir.module';
import { OrdersModule } from './orders/orders.module';
import { CartModule } from './cart/cart.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    DirModule,
    OrdersModule,
    CartModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
