import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private empresa: AngularFirestoreDocument;

  constructor(private readonly afs: AngularFirestore) { 
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
  }

  crearCategoria(categoria) {
    const id = this.afs.createId();
    return this.empresa.collection('categorias').doc(id).set(categoria)
  }

  crearServicio(categoria, servicio) {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    const itemDoc = this.afs.doc('categorias/' + categoria)
    const id = this.afs.createId();
    this.empresa.collection('servicios').doc(id).set(servicio)
    return this.empresa.collection('servicios').doc(id).update({ categoria: itemDoc.ref })
  }

  obtenerCategorias() {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('categorias').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

 

  obtenerServicios() {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('servicios').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        const uid = a.payload.doc.ref.id
        const ref = this.afs.collection('categorias').doc(uid)
        return { id, data, ref };
      }))
    );
  }

  crearVehiculo(persona, vehiculo) {
    const itemDoc = this.afs.doc('personas/' + persona)
    const id = this.afs.createId();
    this.empresa.collection('vehiculos').doc(id).set(vehiculo)
    return this.empresa.collection('vehiculos').doc(id).update({ dueno: itemDoc.ref })
  }
}
