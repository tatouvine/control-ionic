import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {AngularFirestore} from "angularfire2/firestore";
import {map} from "rxjs/operators";
import 'rxjs/add/operator/map'

@Injectable()
export class VilleProvider {

  private villes: any = [];
  villeSubject = new Subject<any[]>();

  constructor(private db: AngularFirestore) {
    this.getAllVilles();
  }

  emitVilleSubject() {
    this.villeSubject.next(this.villes.slice());
  }

  getVilleById(id: number) {
    for (const ville of this.villes) {
      if (ville.id == id) {
        return ville;
      }
    }
  }

  saveNewVille(ville: any) {
    return new Observable(obs => {
      this.db.collection('villes').add(ville).then(() => {
        console.log("success");
        obs.next();
      })
    })
  }

  getAllVilles() {
    return this.db.collection('villes').snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data(),
          }
        })
      })
    ).subscribe(res => {
      this.villes = res;
      this.emitVilleSubject();
    })
  }

  update(villes: any, id: any) {
    return new Observable(obs => {
      this.db.doc(`villes/${id}`).update(villes);
      obs.next();
    })
  }

  delete(id: any) {
    this.db.doc(`villes/${id}`).delete();
  }
}
