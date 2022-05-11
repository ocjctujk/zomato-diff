import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ListViewPage } from '../shared/list-view/list-view.page';
import { RestaurantService } from '../shared/restaurant.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  categories = ["Popular Restaurants","Featured","Legacy"]
  restaurants = [];

  slideOpts = {
    freeMode: true,
    slidesPerView: 3.5,
    spaceBetween: 10,
    offsetBefore: 11,
    initialSlide: 0,
    speed: 400,
  };
  

  constructor(
    private navCtrl: NavController,
    private restaurantService: RestaurantService,
    private modalCtrl: ModalController
  ) {}

  onSelectItem(id: number) {
    this.navCtrl.navigateForward('/restaurant/' + id);
  }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe((restaurant) => {
      this.restaurants = [...restaurant];
    });
  }
  onSeeAll(){
    console.log("See all");
    this.modalCtrl.create({
      component: ListViewPage,
      componentProps: {},
      // breakpoints: [0,1,2],
      // initialBreakpoint: 1,
      canDismiss: true
    }).then(listViewPage=>{
      listViewPage.present();
    })
  }
}
