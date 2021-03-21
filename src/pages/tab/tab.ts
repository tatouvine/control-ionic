import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {VilleListPage} from "../ville-list/ville-list";
import {AboutPage} from "../about/about";
import {PhotosPage} from "../photos/photos";


@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

  home = HomePage;
  villes = VilleListPage;
  about = AboutPage;
  photos = PhotosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
