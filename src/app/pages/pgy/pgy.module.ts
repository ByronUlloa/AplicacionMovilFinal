import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PgyPageRoutingModule } from './pgy-routing.module';

import { PgyPage } from './pgy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PgyPageRoutingModule
  ],
  declarations: [PgyPage]
})
export class PgyPageModule {}
