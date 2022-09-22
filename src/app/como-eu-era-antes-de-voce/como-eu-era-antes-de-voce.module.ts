import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComoEuEraAntesDeVocePageRoutingModule } from './como-eu-era-antes-de-voce-routing.module';

import { ComoEuEraAntesDeVocePage } from './como-eu-era-antes-de-voce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComoEuEraAntesDeVocePageRoutingModule
  ],
  declarations: [ComoEuEraAntesDeVocePage]
})
export class ComoEuEraAntesDeVocePageModule {}
