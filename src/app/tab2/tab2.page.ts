import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestaurantService } from '../shared/restaurant.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  restaurants = [];
  constructor(private restaurantService: RestaurantService,private navCtrl:NavController) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe((restaurant) => {
      this.restaurants = [...restaurant];
    });
  }

  onOpenRestaurant(id: number) {
    this.navCtrl.navigateForward('/restarant-dining/' + id);
    // this.modalCtrl.dismiss();
  }
}
