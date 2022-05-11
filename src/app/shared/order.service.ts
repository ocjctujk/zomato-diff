import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cartItems, OrderItem } from './menu.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: OrderItem[]=[];
  constructor() { }
  ordersSubject = new BehaviorSubject<OrderItem[]>(this.orders);

  addOrderItem(items:cartItems[],paymentStatus: boolean,orderStatus:boolean,total: number){
    let totalWithTax = total;
    totalWithTax+=totalWithTax*0.18;
    this.orders.unshift({
      item: items,
      orderStatus: true,
      paymentStatus: true,
      total: totalWithTax
    });
    this.ordersSubject.next(this.orders);
  }


}
