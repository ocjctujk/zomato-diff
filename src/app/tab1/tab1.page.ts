import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RestaurantService } from '../shared/restaurant.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  restaurants = [];

  slideOpts = {
    freeMode: true,
    slidesPerView: 4,
    spaceBetween: 10,
    offsetBefore: 11,
    initialSlide: 0,
    speed: 400,
  };
  constructor(
    private navCtrl: NavController,
    private restaurantService: RestaurantService
  ) {}

  onSelectItem(id: number) {
    console.log(id);
    this.navCtrl.navigateForward('/restaurant/' + id);
  }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe((restaurant) => {
      this.restaurants = [...restaurant];
    });
  }
}
