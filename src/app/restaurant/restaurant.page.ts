import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';
import { RestaurantService } from '../shared/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  id: number;
  selectedRestaurant;
  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.restaurantService.getRestaurant(this.id));
    this.selectedRestaurant = this.restaurantService.getRestaurant(this.id);
  }

  onAddItem(id: number) {
    console.log(id);
    this.modalCtrl.create({
      component: AddItemPage,
      componentProps: {id: id,restaurantId: this.id},
      // breakpoints: [0,1,2],
      // initialBreakpoint: 1,
      canDismiss: true
    }).then(addItemPage=>{
      addItemPage.present();
    })
  }
}
