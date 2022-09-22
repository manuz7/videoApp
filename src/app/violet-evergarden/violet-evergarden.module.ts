import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VioletEvergardenPageRoutingModule } from './violet-evergarden-routing.module';

import { VioletEvergardenPage } from './violet-evergarden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VioletEvergardenPageRoutingModule
  ],
  declarations: [VioletEvergardenPage]
})
export class VioletEvergardenPageModule {}
