import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookPlacePage } from './book-place.page';

const routes: Routes = [
  {
    path: '',
    component: BookPlacePage
  },
  // {
  //   path: 'booking',
  //   loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookPlacePageRoutingModule {}
