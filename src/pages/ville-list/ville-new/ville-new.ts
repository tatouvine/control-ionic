import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {VilleProvider} from "../../../providers/ville/ville";

/**
 * Generated class for the VilleNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ville-new',
  templateUrl: 'ville-new.html',
})
export class VilleNewPage {

  public ville: any = {
    urlimg: null,
    nom: null,
    maire: null,
    habitant: null,
    taille: null
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private Ville: VilleProvider) {
  }

  onAdd(){
    this.Ville.saveNewVille(this.ville).subscribe(()=>{
      this.ville = {
        urlimg: null,
        nom: null,
        maire: null,
        habitant: null,
        taille: null
      };
    })
    this.navCtrl.pop();
  }

}
