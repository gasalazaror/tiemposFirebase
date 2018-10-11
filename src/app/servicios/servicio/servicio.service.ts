import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private empresa: AngularFirestoreDocument;

  constructor(private readonly afs: AngularFirestore) {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
  }

  crearCategoria(categoria) {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    const id = this.afs.createId();
    return this.empresa.collection('categorias').doc(id).set(categoria)
  }
  obtenerUnServicio(id) {
    return this.empresa.collection('servicios').doc(id).valueChanges()
  }

  obtenerCategoria(id) {
 
    return this.empresa.collection('categorias').doc(id).valueChanges()
  }

  modificarCategoria(id, categoria) {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('categorias').doc(id).update(categoria)
  }

  crearServicio(categoria, servicio) {
    
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    const itemDoc = this.afs.doc('categorias/' + categoria)
    const id = this.afs.createId();
    this.empresa.collection('servicios').doc(id).set(servicio)
    return this.empresa.collection('servicios').doc(id).update({ categoria: itemDoc.ref })
  }

  modificarServicio(id, categoria, servicio) {
    
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    const itemDoc = this.afs.doc('categorias/' + categoria)
    this.empresa.collection('servicios').doc(id).update(servicio)
    return this.empresa.collection('servicios').doc(id).update({ categoria: itemDoc.ref })
  }

  eliminarServicio(servicio) {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('servicios').doc(servicio.id).delete()
  }

  validarServicio(campo, valor) {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('servicios', query => query.where(campo, '==', valor)).valueChanges()
  }

  obtenerCategorias() {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('categorias', query => query.orderBy('nombre')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

  obtenerUnaCategoria(categoria) {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('categorias', query => query.where('nombre', '==', categoria)).valueChanges()
  }

  eliminarCategoria(idCategoria) {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('categorias').doc(idCategoria).delete();
  }



  obtenerServicios() {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('servicios' , query => query.orderBy('codigo')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

  obtenerUnaCategoriaID(id){
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));

    return this.empresa.collection('categorias').doc(id).valueChanges()
  }



  crearVehiculo(persona, vehiculo) {
    const itemDoc = this.afs.doc('personas/' + persona)
    const id = this.afs.createId();
    this.empresa.collection('vehiculos').doc(id).set(vehiculo)
    return this.empresa.collection('vehiculos').doc(id).update({ dueno: itemDoc.ref })
  }
}
