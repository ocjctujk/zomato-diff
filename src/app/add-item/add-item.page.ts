import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
    private cartService: CartService
  ) {}

  ngOnInit() {
    console.log(this.id);
    console.log(this.restaurantId);
    this.loadedItem = this.restaurantService.getItem(
      this.id,
      this.restaurantId
    );
    console.log(this.loadedItem);
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
    console.log(isChecked);
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
    alert("Item added to cart");
  }
}
