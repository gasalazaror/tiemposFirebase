import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {


  private empresa: AngularFirestoreDocument;

  constructor(private readonly afs: AngularFirestore) {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
  }

  crearVehiculo(persona, vehiculo) {
    const itemDoc = this.afs.doc('personas/' + persona)
    const id = this.afs.createId();
    this.empresa.collection('vehiculos').doc(id).set(vehiculo)
    return this.empresa.collection('vehiculos').doc(id).update({ dueno: itemDoc.ref })
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

  obtenerUnVehiculo(id) {
    return this.empresa.collection('vehiculos').doc(id).valueChanges()
  }
}
