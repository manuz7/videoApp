import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComoEuEraAntesDeVocePage } from './como-eu-era-antes-de-voce.page';

const routes: Routes = [
  {
    path: '',
    component: ComoEuEraAntesDeVocePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComoEuEraAntesDeVocePageRoutingModule {}
