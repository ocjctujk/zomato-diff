import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestarantDiningPage } from './restarant-dining.page';

const routes: Routes = [
  {
    path: ':id',
    component: RestarantDiningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestarantDiningPageRoutingModule {}
