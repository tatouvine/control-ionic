import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VilleListPage } from './ville-list';

@NgModule({
  declarations: [
    VilleListPage,
  ],
  imports: [
    IonicPageModule.forChild(VilleListPage),
  ],
})
export class VilleListPageModule {}
