import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { popoverController } from '@ionic/core';
import { WalletService } from './wallet.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private walletService: WalletService
  ) {}
  balance;
  paymentMethod = '';
  amount=300;

  ngOnInit() {
    this.walletService.balanceSubject.subscribe(balance=>{
      this.balance = balance;
    })
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
  onPayMoney(){
    this.walletService.addMoney(this.amount);
    this.amount=500;
  }


}
