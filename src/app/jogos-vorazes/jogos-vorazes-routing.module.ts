import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogosVorazesPage } from './jogos-vorazes.page';

const routes: Routes = [
  {
    path: '',
    component: JogosVorazesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogosVorazesPageRoutingModule {}
