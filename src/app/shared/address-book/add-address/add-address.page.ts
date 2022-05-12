import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {

  constructor(private modalCtrl: ModalController,private addressService: AddressService) { }

  ngOnInit() {
  }

  onCancel(){
    this.modalCtrl.dismiss();
  }

  onSubmit(form: NgForm){
    const title = form.value.title;
    const address = form.value.address;

    console.log("Title : "+title);
    console.log("Address : "+address);
    
    this.addressService.addAddress(title,address);
    this.modalCtrl.dismiss();
  }

}
