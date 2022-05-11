import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/book-place/booking.service';
import { Booking } from '../menu.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  booking:Booking;
  restaurant;
  constructor(private bookingService: BookingService,private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.bookingService.bookingSubject.subscribe(booking=>{
      this.booking = booking;
    })
     this.restaurant = this.restaurantService.getRestaurant(this.booking.bookingRestaurantId);
     console.log("got "+this.restaurant);
     console.log("got "+this.booking);
  }
  onCancelBooking(){
    this.bookingService.setBooking(0,0);
  }

}
