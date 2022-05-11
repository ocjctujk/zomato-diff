import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cartItems, Item } from './shared/menu.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: cartItems[] = [];
  cartItemSubject = new BehaviorSubject<cartItems[]>(this.cartItems);
  constructor() {}

  addToCart(item: Item, quantity: number) {
    if (this.doesItemExistInCart(item.id)) {
      let repeat = this.cartItems.filter((itemData) => {
        return itemData.item.id == item.id;
      })[0];
      repeat.quantity += quantity;
    } else {
      this.cartItems.push({
        item: item,
        quantity: quantity,
      });
    }
    this.cartItemSubject.next(this.cartItems);
    console.log(this.cartItems);
  }

  doesItemExistInCart(id) {
    const repeat = this.cartItems.filter((item) => {
      return item.item.id == id;
    })[0];
    if (repeat) {
      return true;
    }
    return false;
  }

  removeItemFromCart(id){
    this.cartItems = this.cartItems.filter((item) => {
      return item.item.id != id;
    });
    this.cartItemSubject.next(this.cartItems);
  }

  clearCart(){
    this.cartItems = [];
    this.cartItemSubject.next(this.cartItems);
  }

}
