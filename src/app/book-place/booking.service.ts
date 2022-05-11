import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Booking } from '../shared/menu.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  booking: Booking = { bookingRestaurantId: 0, person: 0 };
  bookingSubject = new BehaviorSubject<Booking>(this.booking);
  constructor() {}

  setBooking(restaurantId :number,person: number) {
    console.log("Will set "+restaurantId+"for"+person);
    this.booking.bookingRestaurantId = restaurantId;
    this.booking.person = person;
    this.bookingSubject.next(this.booking);
  }
  
}
