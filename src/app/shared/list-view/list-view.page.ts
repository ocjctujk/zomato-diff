import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit {
  restaurants = [];
  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe((restaurant) => {
      this.restaurants = [...restaurant];
    });
  }
  // closeModal() {
  //   this.modalCtrl.dismiss();
  // }

  onOpenRestaurant(id: number) {
    this.navCtrl.navigateForward('/restaurant/'+id);
    // this.modalCtrl.dismiss();
  }
}
