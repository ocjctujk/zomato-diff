import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { AddressService } from '../shared/address-book/address.service';
import { ListViewPage } from '../shared/list-view/list-view.page';
import { Address } from '../shared/menu.model';
import { RestaurantService } from '../shared/restaurant.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  categories = ["Popular Restaurants","Featured","Legacy"]
  restaurants = [];
  addresses:Address[];
  selectedAddress:Address;
  slideOpts = {
    freeMode: true,
    slidesPerView: 3.5,
    spaceBetween: 10,
    offsetBefore: 11,
    initialSlide: 0,
    speed: 400,
  };
  

  constructor(
    private navCtrl: NavController,
    private restaurantService: RestaurantService,
    private modalCtrl: ModalController,
    private addressService: AddressService
  ) {}

  onSelectItem(id: number) {
    this.navCtrl.navigateForward('/restaurant/' + id);
  }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe((restaurant) => {
      this.restaurants = [...restaurant];
    });
    this.addressService.addressSubject.subscribe(address=>{
      this.addresses = address;
    });
    this.addressService.selectedAddressSubject.subscribe(data=>{
      this.selectedAddress = data;
    })
  }
  onSeeAll(){
    console.log("See all");
    this.modalCtrl.create({
      component: ListViewPage,
      componentProps: {},
      // breakpoints: [0,1,2],
      // initialBreakpoint: 1,
      canDismiss: true
    }).then(listViewPage=>{
      listViewPage.present();
    })
  }

  onOptionSelect(select){
    console.log(select.value);
    const fetchAddressByName = this.addresses.filter(data=>{
      return data.title === select.value;
    })[0];
    this.addressService.setSelectedAddress(fetchAddressByName.id);

  }
  // onChange(id: number){
  //   console.log("called"+id);
  //   this.addressService.setSelectedAddress(id);
  // }
}
