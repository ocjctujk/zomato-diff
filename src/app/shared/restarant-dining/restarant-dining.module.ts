import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestarantDiningPageRoutingModule } from './restarant-dining-routing.module';

import { RestarantDiningPage } from './restarant-dining.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestarantDiningPageRoutingModule
  ],
  declarations: [RestarantDiningPage]
})
export class RestarantDiningPageModule {}
