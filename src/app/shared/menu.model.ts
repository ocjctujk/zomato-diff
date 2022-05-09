
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
    imageUrl: string;
}

export interface ItemCategory{
    name: string;
    items: Item[];
}

export interface cartItems{
    item: Item;
    quantity: number
}