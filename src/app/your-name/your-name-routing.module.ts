import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourNamePage } from './your-name.page';

const routes: Routes = [
  {
    path: '',
    component: YourNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourNamePageRoutingModule {}
