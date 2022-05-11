import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { alertController, modalController, toastController } from '@ionic/core';
import { RestaurantService } from '../shared/restaurant.service';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-book-place',
  templateUrl: './book-place.page.html',
  styleUrls: ['./book-place.page.scss'],
})
export class BookPlacePage implements OnInit {
  restaurantId;
  selectedRestaurant;
  quantity = 2;
  constructor(
    private modalCtrl: ModalController,
    private restaurantService: RestaurantService,
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    console.log(this.restaurantId);
    this.selectedRestaurant = this.restaurantService.getRestaurant(
      this.restaurantId
    );
    console.log(this.selectedRestaurant);
  }

  increase() {
    this.quantity++;
  }
  decrease() {
    if (this.quantity == 1) {
      return;
    }
    this.quantity--;
  }
  onClose() {
    this.modalCtrl.dismiss();
  }
  onBookTable() {
    // this.bookTable();
    alertController
      .create({
        header:
          'Want to book ' +
          this.quantity +
          ' person table at ' +
          this.selectedRestaurant.name +
          '?',
        buttons: [
          {
            text: 'Yes',
            handler: ()=>{this.bookTable()} ,
          },
          {
            text: 'No',
            role: 'Cancel',
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }
  bookTable() {
    console.log('Will book'+this.restaurantId);
    this.bookingService.setBooking(this.restaurantId,this.quantity);
    toastController
      .create({
        header: 'Table booked !',
        duration: 2000,
      })
      .then((toast) => {
        toast.present();
        this.onClose();
      });
  }
}
