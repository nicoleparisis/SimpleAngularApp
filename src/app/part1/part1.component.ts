import { Component, OnInit } from '@angular/core';
import {ShoppingCart} from './Cart';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit{

   localStorageBooks = localStorage.getItem('Parisis_cart');

    cart = new ShoppingCart(JSON.parse(this.localStorageBooks));
    books = this.cart.getItems();
    total = this.cart.getTotal(); 

    addBook(){
      this.cart.addItem();
    }
    removeBook(index: number){
      this.cart.removeItem(index);
    }
    saveBooks(index: number){ 
       this.cart.saveItem();
    }
    updateTotal(){//This is annoying that it doesnt update by itself
      this.total = this.cart.getTotal(); 
    }

  ngOnInit(){
    
  }
}

