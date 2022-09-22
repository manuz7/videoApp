import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogosVorazesPageRoutingModule } from './jogos-vorazes-routing.module';

import { JogosVorazesPage } from './jogos-vorazes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogosVorazesPageRoutingModule
  ],
  declarations: [JogosVorazesPage]
})
export class JogosVorazesPageModule {}
