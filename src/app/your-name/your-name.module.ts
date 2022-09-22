import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourNamePageRoutingModule } from './your-name-routing.module';

import { YourNamePage } from './your-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourNamePageRoutingModule
  ],
  declarations: [YourNamePage]
})
export class YourNamePageModule {}
