import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { cartItems } from '../shared/menu.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  cartItems: cartItems[];

  constructor(private cartService:CartService) {  }

  ngOnInit(): void {
    this.cartService.cartItemSubject.subscribe(item=>{
      this.cartItems=[...item];
    })
  }
}
