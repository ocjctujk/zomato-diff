import { Component, OnInit } from '@angular/core';
import { cartItems, OrderItem } from '../shared/menu.model';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  orders:OrderItem[];
  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.orderService.ordersSubject.subscribe(order=>{
      this.orders = order;
    });

  }

  itemPriceWithAddOnsAndQuantity(item: cartItems) {
    let price = 0;
    for (let addOn of item.item.addOns) {
      if (addOn.isChecked === true) {
        price += addOn.price;
      }
    }
    price = (price + item.item.price) * item.quantity;
    return price;
  }

}
