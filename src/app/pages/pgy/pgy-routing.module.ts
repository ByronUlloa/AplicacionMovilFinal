import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PgyPage } from './pgy.page';

const routes: Routes = [
  {
    path: '',
    component: PgyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PgyPageRoutingModule {}
