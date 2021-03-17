import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VillePage } from './ville';

@NgModule({
  declarations: [
    VillePage,
  ],
  imports: [
    IonicPageModule.forChild(VillePage),
  ],
})
export class VillePageModule {}
