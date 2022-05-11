import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { BookPlacePage } from 'src/app/book-place/book-place.page';
import { FavouritesService } from '../favourites/favourites.service';
import { Item } from '../menu.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restarant-dining',
  templateUrl: './restarant-dining.page.html',
  styleUrls: ['./restarant-dining.page.scss'],
})
export class RestarantDiningPage implements OnInit {

  id: number;
  selectedRestaurant;
  ambiencePics;
  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private favouriteService: FavouritesService,
    private toastController: ToastController
  ) {}

  

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    console.log(this.restaurantService.getRestaurant(this.id));
    this.selectedRestaurant = this.restaurantService.getRestaurant(this.id);
    this.ambiencePics = this.selectedRestaurant.imageUrl;
    this.ambiencePics = this.ambiencePics.slice(1);
  }


  onDelievery(){
    this.navCtrl.navigateForward('/restaurant/'+this.id);
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
    console.log(item);
    
  }

  onBookPlace(){
    this.modalCtrl.create({
      component: BookPlacePage,
      componentProps: {
        restaurantId: this.id
      }
    }).then(modal=>{
      modal.present();
    })
  }

}
