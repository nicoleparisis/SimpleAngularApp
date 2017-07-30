import { Component, OnInit } from '@angular/core'
import {ICart} from './ICart';
import {Book} from './Books';

@Component({
 selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})

export class ShoppingCart implements ICart{
   
  private books: Book[];

constructor(books: Book[]){
    this.books = books;
    if(this.books == null){
      this.books = [
        {id:1, title: 'Absolute Java',    
              qty: 1, price: 114.95},
          {id: 2, title: 'Pro HTML5',        
              qty: 1, price: 27.95},
          {id: 3, title: 'Head First HTML5', 
              qty: 1, price: 27.89}
      ]
    }
}

getItems(): Book[]{
  return this.books;
}
getTotal(): number{
  let runningTotal: number;
        runningTotal = 0;
        for(let book of this.books){
            runningTotal += (book.price * book.qty);
        }
        return runningTotal;
}
  removeItem(index: number): void {
        this.books.splice(index, 1);
      }
  addItem(): void {
        let newBook: Book = {
           id: Math.floor(Math.random() * 10000) + 3,// id is a random number generated but can not be 1, 2, or 3 because those are taken in the default list
           title: 'New Book',    
           qty: 1, 
           price: 10.99
         }
         this.books.push(newBook);
      }
  saveItem(): void {
        localStorage.setItem('Parisis_cart', JSON.stringify(this.books));
      }

}
