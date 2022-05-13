import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { CartService } from '../cart.service';
import { AddressService } from '../shared/address-book/address.service';
import { cartItems, Item } from '../shared/menu.model';
import { OrderService } from '../shared/order.service';
import { WalletService } from '../tab5/wallet.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  cartItems: cartItems[];
  itemTotal = 0;
  delieveryAddress;
  paymentMethod = 'wallet';
  constructor(
    private cartService: CartService,
    private alertCtrl: AlertController,
    private orderService: OrderService,
    private navCtrl: NavController,
    private addressService: AddressService,
    private walletService: WalletService,
  ) {}

  ngOnInit(): void {
    this.cartService.cartItemSubject.subscribe((item) => {
      this.cartItems = item;
      this.itemTotal = 0;
      let addOnMoney = 0;
      for (let item of this.cartItems) {
        // this.itemTotal += item.item.price * item.quantity;
        addOnMoney = 0;
        for (let addOn of item.item.addOns) {
          if (addOn.isChecked) {
            addOnMoney += addOn.price;
          }
        }
        this.itemTotal += (addOnMoney + item.item.price) * item.quantity;
      }
    });

    this.addressService.selectedAddressSubject.subscribe((address) => {
      this.delieveryAddress = address;
    });
  }

  increase(item: cartItems) {
    item.quantity++;
    // this.itemTotal += item.item.price;
    let addOnMoney = 0;
    for (let addOn of item.item.addOns) {
      if (addOn.isChecked) {
        addOnMoney += addOn.price;
      }
    }
    this.itemTotal += item.item.price + addOnMoney;
  }

  decrease(item: cartItems) {
    if (item.quantity == 1) {
      console.log('We shall delete this item from cart');
      this.cartService.removeItemFromCart(item.item.id);
      return;
    }
    if (item.quantity > 0) {
      item.quantity--;
      // this.itemTotal -= item.item.price;
    }
    let addOnMoney = 0;
    for (let addOn of item.item.addOns) {
      if (addOn.isChecked) {
        addOnMoney += addOn.price;
      }
    }
    this.itemTotal -= item.item.price + addOnMoney;
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

  itemPriceWithAddOns(item: cartItems) {
    let price = item.item.price;
    for (let addOn of item.item.addOns) {
      if (addOn.isChecked == true) {
        price += addOn.price;
      }
    }
    return price;
  }

  onPay() {
    let difference=0;
    if(this.paymentMethod=='wallet'){
      difference = this.walletService.deductMoney(
        this.itemTotal + this.itemTotal * 0.18
      );
    }
    
    console.log(this.itemTotal + this.itemTotal * 0.18)
    console.log(difference);
    console.log(this.paymentMethod);
    if (difference<0) {
      this.alertCtrl
        .create({
          header: 'Not enough money.Please add '+Math.abs(difference).toFixed(2)+' to wallet to order Items',
          buttons: [
            {
              text: 'Add money',
              handler: () => {  this.navCtrl.navigateForward('/tabs/tab5') },
            },
            {
              text: 'Back',
              role: 'Cancel',
            },
          ],
        })
        .then((alert) => {
          alert.present();
          return;
        });
    }
    //Code below this only should execute when balance is enough.
    if (difference>=0) {
      this.orderService.addOrderItem(
        this.cartItems,
        true,
        true,
        this.itemTotal
      );
      this.cartItems = [];
      this.itemTotal = 0;
      this.cartService.clearCart();
      this.alertCtrl
        .create({
          message: 'Order Placed!',
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.navCtrl.navigateForward('tabs/tab4');
              },
            },
          ],
        })
        .then((alrt) => {
          alrt.present();
        });
    }
  }
}
