import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';
import { FavouritesService } from '../shared/favourites/favourites.service';
import { Item } from '../shared/menu.model';
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
    private modalCtrl: ModalController,
    private favouriteService: FavouritesService,
    private toastController: ToastController
  ) {}

  

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.selectedRestaurant = this.restaurantService.getRestaurant(this.id);
  }

  onAddItem(id: number) {
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

  onAddToFavourite(item:Item){
    item.favourite = !item.favourite;
    if(item.favourite){
      this.favouriteService.addToFavourite(item,this.id);
      this.toastController.create({
        header: 'Item Added to favourites!',
        duration: 2000
      }).then(alert=>{
        alert.present();
      });
    }
    else{
      this.favouriteService.removeFromFavourite(item);
      this.toastController.create({
        header: 'Item Removed From favourites!',
        duration: 2000
      }).then(alert=>{
        alert.present();
      });
    }
    
  }

}
