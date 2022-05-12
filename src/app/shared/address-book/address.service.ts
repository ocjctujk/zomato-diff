import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Address } from '../menu.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  address:Address[]=[{
    id: 1,
    title: 'Home',
    address: 'A-304, Shrinandmagar-3, Vejalpur, Ahmedabad'
  },
  {
    id: 2,
    title: 'Office',
    address: '324, Satyam mall, Near mansi circle, Vastrapur, Ahmedabad.'
  }
];
  selectedAddress=this.address[0];
  selectedAddressSubject = new BehaviorSubject<Address>(this.selectedAddress);
  addressSubject = new BehaviorSubject<Address[]>(this.address);
  constructor() { }


  modifyAddress(id: number, title: string,address: string){
    let selecatedAddress = this.address.filter(data=>{
      return data.id===id
    });
    selecatedAddress[0].address = address;
    selecatedAddress[0].title = title;
    this.addressSubject.next(this.address);
  }

  deleteAddress(id: number){
    if(this.selectedAddress.id==id && this.address.length!=1){
      this.selectedAddress = this.address[0];
      this.selectedAddressSubject.next(this.selectedAddress);
    }
    this.address = this.address.filter(data=>{
      return data.id != id;
    })
    this.addressSubject.next(this.address);
  }

  addAddress(title: string, address: string){
    
    this.address.push({
      id: Math.random(),
      title: title,
      address: address
    });
    this.addressSubject.next(this.address);
    
  }

  getAddress(id: number){
    return [...this.address.filter(data=>{
      return data.id===id;
    })][0];
  }

  setSelectedAddress(id: number){
    const address = this.address.filter(data=>{
      return data.id===id;
    })[0];
    this.selectedAddress = address;
    this.selectedAddressSubject.next(this.selectedAddress);
  }


}
