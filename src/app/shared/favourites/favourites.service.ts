import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Favourite, Item } from '../menu.model';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favourites:Favourite[]=[];
  constructor() { }

  favouriteSubject = new BehaviorSubject<Favourite[]>(this.favourites);

  addToFavourite(item: Item,restaurantId: number){
    this.favourites.unshift({item: item,restaurantId: restaurantId });
    this.favouriteSubject.next(this.favourites);
  }

  removeFromFavourite(item:Item){
    this.favourites = this.favourites.filter((data)=>{
      return item.id != data.item.id;
    })
    this.favouriteSubject.next(this.favourites);
  }

}
