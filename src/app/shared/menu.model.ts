
export interface Menu{
    name: string;
    restaurants: string[];
}

export interface Item{
    name: string;
    imageUrl: string;
    id: number;
    price: number;
    details: string;
    customization: boolean; 
    // Customization is true if jain is available false if no jain is available
    addOns: addOns[]; 
    favourite: boolean
}
export interface addOns{
    name: string;
    isChecked: boolean;
    price: number;
}

export interface Restaurant{
    id: number;
    name: string;
    address: string;
    offers: string;
    itemCategory: ItemCategory[]; 
    details: string;
    imageUrl: string[];
    rating: number;
}

export interface ItemCategory{
    name: string;
    items: Item[];
}

export interface cartItems{
    item: Item;
    quantity: number
}

export interface OrderItem{
    item: cartItems[];
    paymentStatus: boolean;
    orderStatus: boolean;
    total: number;
}

export interface Favourite{
    item: Item;
    restaurantId: number

}

export interface Booking{
    bookingRestaurantId: number,
    person: number
}

export interface Address{
    id: number;
    title: string;
    address: string;
}
