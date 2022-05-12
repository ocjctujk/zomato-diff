import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Address } from '../menu.model';
import { AddAddressPage } from './add-address/add-address.page';
import { AddressService } from './address.service';
import { EditAddressPage } from './edit-address/edit-address.page';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.page.html',
  styleUrls: ['./address-book.page.scss'],
})
export class AddressBookPage implements OnInit {
  addresses:Address[];
  selectedAddress:Address;
  constructor(private addressService: AddressService,private modalCtrl: ModalController,private alertCtrl: AlertController) { }

  ngOnInit() {
    this.addressService.addressSubject.subscribe(addresses=>{
      this.addresses = [...addresses];
      if(this.addresses.length==1){
        this.addressService.setSelectedAddress(this.addresses[0].id);
      }
    })
    this.addressService.selectedAddressSubject.subscribe(selectedAddress=>{
      this.selectedAddress = selectedAddress;
    })
  
  }

  onEdit(id: number){
    this.modalCtrl.create({
      component: EditAddressPage,
      componentProps: {id: id}
    }).then(modal=>{
      modal.present();
    })
  }

  onAdd(){
    this.modalCtrl.create({
      component: AddAddressPage,
    }).then(modal=>{
      modal.present();
    })
  }

  onDelete(id: number){
    
    this.alertCtrl.create({
      header: 'Are you sure you want to delete the address?',
      buttons: [
        {
          text: 'Yes',
          handler: ()=>{ this.addressService.deleteAddress(id); }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(alert=>{
      alert.present();
    })
  }

  onSelectAddress(id: number){
    console.log(id);
    this.addressService.setSelectedAddress(id);
    console.log(this.selectedAddress);
  }



}
