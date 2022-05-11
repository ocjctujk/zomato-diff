import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoughPage } from './rough.page';

const routes: Routes = [
  {
    path: '',
    component: RoughPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoughPageRoutingModule {}
