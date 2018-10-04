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

  crearVehiculo(vehiculo) {
    const id = this.afs.createId();
    return this.empresa.collection('vehiculos').doc(id).set(vehiculo)
  }

  modificarVehiculo(id, vehiculo) {
    return this.empresa.collection('vehiculos').doc(id).update(vehiculo)
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

  obtenerVehiculosActivos() {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('vehiculos', query => query.where('estado','==','Activo')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

  eliminarVehiculo(idVehiculo) {
    return this.empresa.collection('vehiculos').doc(idVehiculo).delete()
  }

  obtenerUnVehiculo(id) {
    return this.empresa.collection('vehiculos').doc(id).valueChanges()
  }


}
