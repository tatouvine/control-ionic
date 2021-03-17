import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VilleListPage} from "../ville-list/ville-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onGoToVilles(){
    this.navCtrl.push(VilleListPage);
  }
}
