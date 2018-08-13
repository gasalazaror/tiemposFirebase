import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private persona: AngularFirestoreDocument;
  private empresa: AngularFirestoreDocument;


  constructor(private readonly afs: AngularFirestore) {

    this.empresa = this.afs.doc(localStorage.getItem('empresa'));

   }

  crearVehiculo(vehiculo) {
    const id = this.afs.createId();
    return this.empresa.collection('vehiculos').doc(id).set(vehiculo);
  }

  obtenerVehiculos() {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('vehiculos').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }
}
