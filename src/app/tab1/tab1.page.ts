import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSearchbar, ModalController, NavController, Platform } from '@ionic/angular';
import { AddressService } from '../shared/address-book/address.service';
import { ListViewPage } from '../shared/list-view/list-view.page';
import { Address, searchItem } from '../shared/menu.model';
import { RestaurantService } from '../shared/restaurant.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  searchResult: searchItem[] = [];
  itemName;
  categories = ['Popular Restaurants', 'Featured', 'Legacy'];
  restaurants = [];
  addresses: Address[];
  selectedAddress: Address;
  slideOpts = {
    freeMode: true,
    slidesPerView: 3.5,
    // spaceBetween: 10,
    // offsetBefore: 11,
    initialSlide: 0,
    speed: 400,
  };

  getSlidePerview() {
    if (this.platform.width() > 767) {
      this.slideOpts.slidesPerView = 7;
    }
    // console.log('PWA ' + this.platform.is('pwa'));
    // console.log('Android ' + this.platform.is('android'));
    // console.log('Capacitor ' + this.platform.is('capacitor'));
    // console.log('Cordova ' + this.platform.is('cordova'));
    // console.log('Desktop ' + this.platform.is('desktop'));
    // console.log('Electron ' + this.platform.is('electron'));
    // console.log('Hybrid ' + this.platform.is('hybrid'));
    // console.log('IOS ' + this.platform.is('ios'));
    // console.log('I Pad ' + this.platform.is('ipad'));
    // console.log('PWA ' + this.platform.is('iphone'));
    // console.log('Mobile ' + this.platform.is('mobile'));
    // console.log('Mobile Web ' + this.platform.is('mobileweb'));
    // console.log('Phablet ' + this.platform.is('phablet'));
    // console.log('Tablet ' + this.platform.is('tablet'));

    if (this.platform.is('desktop')) {
    }
  }

  constructor(
    private navCtrl: NavController,
    public restaurantService: RestaurantService,
    private modalCtrl: ModalController,
    private addressService: AddressService,
    private platform: Platform
  ) {}

  onSelectItem(id: number) {
    
    this.navCtrl.navigateForward('/restaurant/' + id);
  }

  ngOnInit(): void {
    this.getSlidePerview();
    this.restaurantService.getRestaurants().subscribe((restaurant) => {
      this.restaurants = [...restaurant];
    });
    this.addressService.addressSubject.subscribe((address) => {
      this.addresses = address;
    });
    this.addressService.selectedAddressSubject.subscribe((data) => {
      this.selectedAddress = data;
    });
  }
  onSeeAll() {
    console.log('See all');
    this.navCtrl.navigateForward('/list-view')
    // this.modalCtrl
    //   .create({
    //     component: ListViewPage,
    //     componentProps: {},
    //     // breakpoints: [0,1,2],
    //     // initialBreakpoint: 1,
    //     canDismiss: true,
    //   })
    //   .then((listViewPage) => {
    //     listViewPage.present();
    //   });
  }

  onOptionSelect(select) {
    console.log(select.value);
    const fetchAddressByName = this.addresses.filter((data) => {
      return data.title === select.value;
    })[0];
    this.addressService.setSelectedAddress(fetchAddressByName.id);
  }
  // onChange(id: number){
  //   console.log("called"+id);
  //   this.addressService.setSelectedAddress(id);
  // }

  onSearch(key: string) {
    if(key.length<=1){
      this.searchResult=[];
      return;
    }
    const result = this.restaurantService.getItemNames(key);
    this.searchResult = result;
  }

  
}
