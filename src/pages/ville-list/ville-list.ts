import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {VilleNewPage} from "./ville-new/ville-new";
import {VillePage} from "./ville/ville";
import {Subscription} from "rxjs";
import {VilleProvider} from "../../providers/ville/ville";

/**
 * Generated class for the VilleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ville-list',
  templateUrl: 'ville-list.html',
})
export class VilleListPage implements OnInit{

  public villes = [];
  villeSubscription:Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams,private Ville:VilleProvider) {
  }

  ngOnInit(): void {
    this.villeSubscription=this.Ville.villeSubject.subscribe((listVille)=>{
      this.villes=listVille;
    })
  }

  onGoToCreate() {
    this.navCtrl.push(VilleNewPage);
  }

  onGoToVille(villeNom:string,_id:number) {
    this.navCtrl.push(VillePage,{nom:villeNom,id:_id});
  }



}
