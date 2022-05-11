import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';
import { CartService } from '../cart.service';
import { Item } from '../shared/menu.model';
import { RestaurantService } from '../shared/restaurant.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  loadedItem;
  id;
  restaurantId;
  quantity = 1;
  totalOfAddOn = 0;
  constructor(
    private modalCtrl: ModalController,
    private restaurantService: RestaurantService,
    private cartService: CartService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.loadedItem = this.restaurantService.getItem(
      this.id,
      this.restaurantId
    );
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  increase() {
    this.quantity++;
  }
  decrease() {
    if (this.quantity == 1) {
      this.onCancel();
      return;
    }
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  onChange(price: number, isChecked,addOn) {
    addOn.isChecked = isChecked;
    this.loadedItem.addOns.isChecked=true;
    if (isChecked) {
      this.totalOfAddOn += price;
    } else {
      this.totalOfAddOn -= price;
    }
  }

  onAdd() {
    this.cartService.addToCart(this.loadedItem,this.quantity);
    this.onCancel();
    this.toastCtrl.create({
      header: 'Item Added !',
      duration: 2000
    }).then(alert=>{
      alert.present();
    });
  }
}
