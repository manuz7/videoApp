import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VioletEvergardenPage } from './violet-evergarden.page';

const routes: Routes = [
  {
    path: '',
    component: VioletEvergardenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VioletEvergardenPageRoutingModule {}
