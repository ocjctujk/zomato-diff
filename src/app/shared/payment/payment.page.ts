import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  pin: number[] = [];
  correctPin = '1234';
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  addPinDigit(digit: number) {
    if (this.pin.length === 4) {
      return;
    }
    this.pin.push(digit);
  }
  onRemove() {
    this.pin.pop();
  }
  onGo() {
  
    if (this.convertArraytToDecimal(this.pin) === 1234) {
      this.modalCtrl.dismiss(true);
    } else {
      let errorMessage = 'Wrong pin.Please try again.'
      if(this.pin.length!=4){
        errorMessage+=' Pin should be 4 digit long.'
      }
      alertController.create({
        header: errorMessage,
        buttons: [
          {
            text: 'Okay',
            role: 'cancel',
            handler: ()=>{ this.pin =[] }
          }
        ]
      }).then(alert=>{
        alert.present();
      })
      console.log('Wrong pin');
    }
  }

  convertArraytToDecimal(arr: number[]) {
    let number = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      number += arr[i] * Math.pow(10, arr.length - i - 1);
    }
    return number;
  }

}
