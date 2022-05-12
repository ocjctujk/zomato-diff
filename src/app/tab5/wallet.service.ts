import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  balance: number=100;
  balanceSubject = new BehaviorSubject<number>(this.balance);

  constructor() { }

  addMoney(money: number){
    this.balance += money;
    this.balanceSubject.next(this.balance);
  }
  deductMoney(money: number){
    if(money>this.balance){
      return this.balance-money;
    }
    else{
      const diff = this.balance-money;
      // this.balance=-money;
      console.log(this.balance-money);
      this.balanceSubject.next(this.balance-money);
      return diff;
    }
  }

}
