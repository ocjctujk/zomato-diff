import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu, Restaurant } from './menu.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  _restaurant: Restaurant[] = [
    {
      id: Math.random(),
      name: "Domino'z Pizza",
      address: 'Sigma Icon, Shyamal Char Rasta, Ahmedabad, Gujarat 380015',
      offers: '50% off',
      itemCategory: [
        {
          name: 'Pizza',
          items: [
            {
              id: Math.random(),
              name: 'Margeritta',
              price: 109,
              details: 'Classic delight with 100% real mozzarella cheese',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/f47/db2fb46200a9d41110d7a552e4f69f47.jpg?fit=around|130:130&crop=130:130;*,*',
              customization: true,
              addOns: [{ name: 'Onion', price: 20, isChecked: false }],
            },
            {
              id: Math.random(),
              name: 'Garlic Breadsticks',
              price: 109,
              details:
                'Baked to perfection. Your perfect pizza partner! Tastes best with dip',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/03b/787727453bd857cff70be6560bfb603b.png?fit=around|130:130&crop=130:130;*,*',
              customization: false,
              addOns: [{ name: 'Onion', price: 20, isChecked: false }],
            },
            {
              id: Math.random(),
              name: 'Paneer & Onion',
              price: 125,
              details: 'Creamy Paneer & Onion and Cheese',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/e9a/175ba829bfae3a0eceee540e15329e9a.png?fit=around|130:130&crop=130:130;*,*',
              customization: true,
              addOns: [],
            },
            {
              id: Math.random(),
              name: 'Farmhouse',
              price: 269,
              details:
                'Delightful combination of onion, capsicum, tomato & grilled mushroom',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png?fit=around|130:130&crop=130:130;*,*',
              customization: false,
              addOns: [
                { name: 'Onion', price: 20, isChecked: false },
                { name: 'Tomato', price: 30, isChecked: false },
                { name: 'Cheese', price: 50, isChecked: false },
              ],
            },
          ],
        },
      ],
      details:
        'Delivery/carryout chain offering a wide range of pizzas & a variety of other dishes & sides.',
      imageUrl: 'https://jobs.dominos.com/images/logo.png',
    },
  ];
  restaurantSubject = new BehaviorSubject<Restaurant[]>(this._restaurant);

  constructor() {}

  getRestaurants() {
    return this.restaurantSubject;
  }
  getRestaurant(id: number) {
    return [
      ...this._restaurant.filter((rest) => {
        return rest.id === id;
      }),
    ][0];
  }

  getItem(itemId: number, restaurantId: number) {
    const rest = this.getRestaurant(restaurantId);
    const itemCategory = [...rest.itemCategory];
    let item;
    for (let items of itemCategory) {
      item = items.items.filter((data) => {
        return data.id == itemId;
      })[0];
    }
    return item;
  }
}
