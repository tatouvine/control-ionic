import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {VilleProvider} from "../../../providers/ville/ville";

/**
 * Generated class for the VillePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ville',
  templateUrl: 'ville.html',
})
export class VillePage implements OnInit {
  modif: boolean = false;
  public name: string;
  public id: number;
  public ville: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private Ville: VilleProvider,
              private Toast: ToastController) {
  }

  onGoAccessModif() {
    let alert = this.alertCtrl.create(
      {
        title: "vous est sur de vouloir modifer",
        buttons: [
          {
            text: 'Annuler',
            role: 'Cancel',
          },
          {
            text: 'Configuration',
            handler: () => {
              this.modif = !this.modif
            }

          }
        ]
      });
    alert.present()
  }

  onModif() {
    this.Ville.update(this.ville.data, this.ville.id).subscribe(() => {
      const toast = this.Toast.create({
        message: 'Vos changements ont été sauvegardées',
        duration: 2000
      });
      toast.present();
      this.modif = false
    })
  }

  ngOnInit(): void {
    this.name = this.navParams.get('name');
    this.id = this.navParams.get('id');
    this.ville = this.Ville.getVilleById(this.id);
  }

  onDelete() {
    this.Ville.delete(this.id)
    this.navCtrl.pop();
  }

}
