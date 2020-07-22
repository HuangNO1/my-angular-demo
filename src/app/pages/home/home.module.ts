import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [BooksComponent, CartComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
