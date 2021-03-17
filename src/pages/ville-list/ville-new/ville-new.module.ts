import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VilleNewPage } from './ville-new';

@NgModule({
  declarations: [
    VilleNewPage,
  ],
  imports: [
    IonicPageModule.forChild(VilleNewPage),
  ],
})
export class VilleNewPageModule {}
