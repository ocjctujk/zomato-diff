import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { alertController, modalController } from '@ionic/core';

@Component({
  selector: 'app-rough',
  templateUrl: './rough.page.html',
  styleUrls: ['./rough.page.scss'],
})
export class RoughPage implements OnInit {
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
    console.log(this.convertArraytToDecimal(this.pin));
    if (this.convertArraytToDecimal(this.pin) === 1234) {
      modalController.dismiss(true);
    } else {
      alertController.create({
        header: 'Wrong Pin. Please try again',
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
