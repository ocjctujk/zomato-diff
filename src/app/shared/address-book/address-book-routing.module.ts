import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressBookPage } from './address-book.page';

const routes: Routes = [
  {
    path: '',
    component: AddressBookPage
  },
  {
    path: 'edit-address',
    loadChildren: () => import('./edit-address/edit-address.module').then( m => m.EditAddressPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./add-address/add-address.module').then( m => m.AddAddressPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressBookPageRoutingModule {}
