import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AddItemPage } from 'src/app/add-item/add-item.page';
import { Favourite, Item } from '../menu.model';
import { RestaurantService } from '../restaurant.service';
import { FavouritesService } from './favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  favourites:Favourite[]=[];
  id;
  constructor(private favouriteService: FavouritesService,private modalCtrl: ModalController,private toastController: ToastController) { }

  ngOnInit() {
    // this.id = +this.route.snapshot.paramMap.get('id');
    this.favouriteService.favouriteSubject.subscribe(favs=>{
      this.favourites = [...favs];
    })
  }

  onAddToFavourite(item:Item){
    item.favourite = !item.favourite;
    if(item.favourite){
      // this.favouriteService.addToFavourite(item);
      // this.toastController.create({
      //   header: 'Item Removed From favourites!',
      //   duration: 2000
      // }).then(alert=>{
      //   alert.present();
      // });
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
    console.log(item);
  }

  onAddItem(item:Item , restaurantId: number) {
    console.log(item.id);
    console.log("Restaurant ID: "+restaurantId);
    this.modalCtrl.create({
      component: AddItemPage,
      componentProps: {id: item.id,restaurantId: restaurantId},
      // breakpoints: [0,1,2],
      // initialBreakpoint: 1,
      canDismiss: true
    }).then(addItemPage=>{
      addItemPage.present();
    })
  }

}
