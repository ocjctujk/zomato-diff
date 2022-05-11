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
              favourite: false,
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
              favourite: false,
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
              favourite: false,
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
              favourite: false,
            },
          ],
        },
      ],
      details:
        'Delivery/carryout chain offering a wide range of pizzas & a variety of other dishes & sides.',
      imageUrl: [
        'https://jobs.dominos.com/images/logo.png',
        'https://b.zmtcdn.com/data/pictures/6/110116/2a73b5886c6d2687d2527b5280c06433.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/pictures/6/110116/f63212a7cf2fbcfc95b71a4346590aa3.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/pictures/6/110116/eece8844473f5ebb33645813ed4ff609.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/reviews_photos/6d8/9e90772828d28680f95f38394697c6d8_1398870191.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/reviews_photos/a15/8ebea8008280724c90a3b87906cf9a15_1398870107.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/reviews_photos/21b/6f47d7cf53f92239ba7ac1ce1ac2621b_1512799837.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
      ],
      rating: 3.9,
    },
    {
      id: Math.random(),
      name: 'Mc Donalds',
      address: 'Center Mall, Panchavati Society, Gulbai Tekra,',
      offers: '30% off',
      itemCategory: [
        {
          name: 'Burgers',
          items: [
            {
              id: Math.random(),
              name: 'Aloo Tikki',
              price: 80,
              details: 'Simple burger with tikki and mayo',
              imageUrl:
                'https://b.zmtcdn.com/data/pictures/chains/1/110271/5bf90ca580e578d486e619d1487131c7.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: true,
              addOns: [{ name: 'Onion', price: 20, isChecked: false }],
              favourite: false,
            },
            {
              id: Math.random(),
              name: 'Paneer Wrap',
              price: 258,
              details: 'Take a big warp when you are hungry',
              imageUrl:
                'https://b.zmtcdn.com/data/pictures/chains/1/110271/a426fee77e21c8e2033d12b8a0fc8f4f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: false,
              addOns: [{ name: 'Onion', price: 20, isChecked: false }],
              favourite: false,
            },
            {
              id: Math.random(),
              name: 'Cold coffee',
              price: 220,
              details: 'Chilled iced coffee',
              imageUrl:
                'https://b.zmtcdn.com/data/pictures/chains/1/110271/fc00130aae8303cdb825dd7570b08e2d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: false,
              addOns: [],
              favourite: false,
            },
            {
              id: Math.random(),
              name: 'McEgg burger',
              price: 120,
              details: 'Wanna eat healthy? Eat mcEgg burger',
              imageUrl:
                'https://b.zmtcdn.com/data/pictures/chains/1/110271/48539a3e718364645caba6cab3d188bd.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: false,
              addOns: [
                { name: 'Onion', price: 20, isChecked: false },
                { name: 'Tomato', price: 30, isChecked: false },
                { name: 'Cheese', price: 50, isChecked: false },
              ],
              favourite: false,
            },
          ],
        },
      ],
      details:
        'Delivery/carryout chain offering a wide range of burgers & a variety of other dishes & sides.',
      imageUrl: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png',
        'https://b.zmtcdn.com/data/reviews_photos/d27/88bc0bd09462924e618b95a041a85d27_1510852004.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/reviews_photos/d27/88bc0bd09462924e618b95a041a85d27_1510852004.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/reviews_photos/a02/84e772b33b2fcd7a98169cdf80ce4a02_1420988464.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/reviews_photos/066/0dd11dbc06e0abf6d1d081a278e80066_1489941304.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/reviews_photos/e21/968137aa3e8b20942d755e7c29274e21_1510851998.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/reviews_photos/140/e263d482fdb16145881af7f7335d7140_1478775780.JPG?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
      ],
      rating: 4.9,
    },
    {
      id: Math.random(),
      name: 'Subway',
      address: 'Max Complex, Navrangpura, Panchavati',
      offers: '15% off',
      itemCategory: [
        {
          name: 'Subway',
          items: [
            {
              id: Math.random(),
              name: 'Paneer tikka sub',
              price: 169,
              details: 'Stuffed with veges and paneer',
              imageUrl:
                'https://b.zmtcdn.com/data/pictures/chains/1/110381/4a814d3555e44201a14958c0ca60c489.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: true,
              addOns: [{ name: 'Onion', price: 20, isChecked: false }],
              favourite: false,
            },
            {
              id: Math.random(),
              name: 'Chatpata Chana',
              price: 220,
              details: 'Healthy chana stuffed with Veges.',
              imageUrl:
                'https://b.zmtcdn.com/data/pictures/chains/1/110381/224334367e26ec8e96e92f49cb8a14f5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: false,
              addOns: [{ name: 'Onion', price: 20, isChecked: false }],
              favourite: false,
            },
            {
              id: Math.random(),
              name: 'Tuna & Cookie',
              price: 270,
              details: 'Tuna sub with Cookie',
              imageUrl:
                'https://b.zmtcdn.com/data/pictures/chains/1/110381/1e20a7132446f3c00b39d34e98ae8d85.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: false,
              addOns: [],
              favourite: false,
            },
            {
              id: Math.random(),
              name: 'Flatizza',
              price: 260,
              details: 'This is what you eat when hunger kicks.',
              imageUrl:
                'https://b.zmtcdn.com/data/pictures/chains/1/110381/a9f38c57bdf3a2c28d5924ff8ee3d378.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: true,
              addOns: [
                { name: 'Onion', price: 20, isChecked: false },
                { name: 'Tomato', price: 30, isChecked: false },
                { name: 'Cheese', price: 50, isChecked: false },
              ],
              favourite: false,
            },
          ],
        },
      ],
      details:
        'Delivery/carryout chain offering a wide range of subway sandwich & a variety of other dishes & sides.',
      imageUrl: [
        'https://logos-download.com/wp-content/uploads/2018/02/Subway_logo_brand-700x139.png',
        'https://b.zmtcdn.com/data/pictures/4/110384/4bd14ce5c0e2c968acdce4d05f4d4ad5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/pictures/4/110384/daa5653ae2de33ca730d39de7128a65f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/pictures/4/110384/336fe2c999812aa733b426d5e5af6b62.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/pictures/4/110384/73800a9c74e1efc498ce33881e0809f2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/pictures/4/110384/e9ab40ef9e114b62738b26312636cf06.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/reviews_photos/3d2/a9614fd6a9bf5509b91eeea6aec813d2_1521128629.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
      ],
      rating: 4.7,
    },
    {
      id: Math.random(),
      name: 'Burger King',
      address: 'Gurukul, Ahmedabad.',
      offers: '40% off',
      itemCategory: [
        {
          name: 'Burgers',
          items: [
            {
              id: Math.random(),
              name: 'Paneer burger',
              price: 160,
              details: 'Stuffed with veges and paneer',
              imageUrl:
                'https://b.zmtcdn.com/data/pictures/chains/2/18549832/d22964f87e192693605c502c4cd09b85.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: true,
              addOns: [{ name: 'Onion', price: 20, isChecked: false }],
              favourite: false,
            },
            {
              id: Math.random(),
              name: 'Paneer burger meal',
              price: 320,
              details: 'Burger + Coke + Frenchfries',
              imageUrl:
                'https://b.zmtcdn.com/data/pictures/2/18549832/e01ffc3a4d1f4a76e63b3250299f4793.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: false,
              addOns: [{ name: 'Onion', price: 20, isChecked: false }],
              favourite: false,
            },
            {
              id: Math.random(),
              name: 'Tuna & Cookie',
              price: 270,
              details: 'Tuna sub with Cookie',
              imageUrl:
                'https://b.zmtcdn.com/data/pictures/chains/1/110381/1e20a7132446f3c00b39d34e98ae8d85.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: false,
              addOns: [],
              favourite: false,
            },
            {
              id: Math.random(),
              name: 'Burger with fries',
              price: 270,
              details: 'Burger with peri-peri fries.',
              imageUrl:
                'https://b.zmtcdn.com/data/pictures/chains/2/18549832/3f735828712c1445ec91e1410f51bb93.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: true,
              addOns: [
                { name: 'Onion', price: 20, isChecked: false },
                { name: 'Tomato', price: 30, isChecked: false },
                { name: 'Cheese', price: 50, isChecked: false },
              ],
              favourite: false,
            },
          ],
        },
      ],
      details:
        'Delivery/carryout chain offering a wide range of Burgers & a variety of other dishes & sides.',
      imageUrl: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/768px-Burger_King_logo_%281999%29.svg.png?20210107191746',
        'https://b.zmtcdn.com/data/pictures/7/18855707/ef6e8705254e75852eccc5c999820069.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/pictures/7/18855707/d1c9bac693c2ecdcceed6b48d9ee32de.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/reviews_photos/5be/dece396988f08409b8ba3c27418165be_1579946239.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/pictures/chains/2/18549832/bc5449bd78f3ff67935ff3590d7ee414.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
      ],
      rating: 4.2,
    },
    {
      id: Math.random(),
      name: 'Taco Bell',
      address: 'Ahmedabad One Mall, Vastrapur, Ahmedabad',
      offers: '25% off',
      itemCategory: [
        {
          name: 'Subway',
          items: [
            {
              id: Math.random(),
              name: 'Veg Big Bell Box',
              price: 280,
              details: 'Taco Burrito and Ulimited Coke',
              imageUrl:
                'https://b.zmtcdn.com/data/pictures/8/19292258/1f8008fc1cec3cd7ea2b559c32b1e642.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: true,
              addOns: [],
              favourite: false,
            },
            {
              id: Math.random(),
              name: 'Naked Chicken Taco',
              price: 320,
              details: 'Naked chicken taco with cocacola.',
              imageUrl:
                'https://b.zmtcdn.com/data/pictures/8/19292258/9846d6003416d857a3577f0ef40d8cd3.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: false,
              addOns: [{ name: 'Onion', price: 20, isChecked: false }],
              favourite: false,
            },
            {
              id: Math.random(),
              name: 'Non veg big bell box',
              price: 270,
              details: 'Non veg taco burrito and unlimted coke',
              imageUrl:
                'https://b.zmtcdn.com/data/reviews_photos/e2d/83b542a0ee6d5fff4c9b24bcf42d2e2d_1582130427.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: false,
              addOns: [],
              favourite: false,
            },
            {
              id: Math.random(),
              name: 'Rice bowl',
              price: 180,
              details: 'Hot rice with mexican spicy gravy',
              imageUrl:
                'https://b.zmtcdn.com/data/reviews_photos/f57/54140c0240da52171904432cc6c3ef57_1580716559.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
              customization: false,
              addOns: [],
              favourite: false,
            },
          ],
        },
      ],
      details:
        'Delivery/carryout chain offering a wide range of mexican food & a variety of other dishes & sides.',
      imageUrl: [
        'https://logodownload.org/wp-content/uploads/2021/05/taco-bell-logo-0.png',
        'https://b.zmtcdn.com/data/reviews_photos/4b6/25fe3694b19ac5d8c8cbc25b9dba94b6_1598149905.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        'https://b.zmtcdn.com/data/reviews_photos/8a7/5d8083c461cf1db3d7c058661f1728a7_1598508988.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
      ],

      rating: 4.3,
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
