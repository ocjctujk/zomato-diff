import { Component, OnInit } from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  ModalController,
} from '@ionic/angular';
import { modalController, popoverController } from '@ionic/core';
import { PaymentPage } from '../shared/payment/payment.page';
import { WalletService } from './wallet.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private walletService: WalletService,
    private alertController: AlertController,
    private modalCtrl: ModalController
  ) {}
  balance;
  paymentMethod = '';
  amount = 300;

  ngOnInit() {
    this.walletService.balanceSubject.subscribe((balance) => {
      this.balance = balance;
    });
  }

  onAddMoney() {
    this.actionSheetCtrl
      .create({
        header: 'Select Payment Method',
        buttons: [
          {
            text: 'Debit Card',
            handler: () => {
              this.paymentMethod = 'Debit Card';
            },
          },
          {
            text: 'Credit Card',
            handler: () => {
              this.paymentMethod = 'Credit Card';
            },
          },
          {
            text: 'Bank Website',
            handler: () => {
              this.paymentMethod = 'Bank Website';
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
          },
        ],
      })
      .then((actionSheet) => {
        actionSheet.present();
      });
  }

  changeAmount(amount: number) {
    this.amount = amount;
  }
  async onPayMoney() {
    const modal = await this.modalCtrl.create({
      component: PaymentPage,
    });
    await modal.present();

    await modal.onDidDismiss().then((data) => {
      console.log(data.data);
      if (data.data) {
        this.walletService.addMoney(this.amount);
        const moneyAdded = this.amount;
        this.paymentMethod = '';
        this.amount = 500;
        this.alertController
          .create({
            header: 'Added Rs ' + moneyAdded + ' to wallet',
            buttons: [
              {
                text: 'OK',
                role: 'cancel',
              },
            ],
          })
          .then((alert) => {
            alert.present();
          });
      }
    });
  }
}
