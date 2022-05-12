import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.page.html',
  styleUrls: ['./edit-address.page.scss'],
})
export class EditAddressPage implements OnInit {
  id;
  address;
  constructor(
    private route: ActivatedRoute,
    private addressService: AddressService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('address');
    console.log(this.id);
    this.address = this.addressService.getAddress(this.id);
  }

  onSubmit(form: NgForm) {
    console.log(this.id);

    this.alertCtrl
      .create({
        header: 'Confirm Update?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              if (form.valid) {
                const title = form.value.title;
                const address = form.value.address;
                console.log(title + address);
                this.addressService.modifyAddress(this.id, title, address);
              }
              this.modalCtrl.dismiss();
            },
          },
          {
            text: 'No',
            role: 'cancel',
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
}
