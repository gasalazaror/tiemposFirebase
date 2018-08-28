import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private empresa: AngularFirestoreDocument;
  private orden: AngularFirestoreDocument;

  constructor(private readonly afs: AngularFirestore) {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
  }

  crearOrden(orden, servicios: any) {
    const id = this.afs.createId();
    this.empresa.collection('ordenes').doc(id).set(orden)
    return id
  }

  modificarOrden(id, orden) {
    this.empresa.collection('ordenes').doc(id).update(orden)
    return id
  }

  agregarDetalle(){
    
  }

  obtenerOrdenes() {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('ordenes', query=> query.orderBy('numero', 'desc')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
   
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

  obtenerUltimaOrden(){
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('ordenes', query=> query.orderBy('numero', 'desc').limit(1)).valueChanges()
  }

  obtenerUnaOrden(id) {
    return this.empresa.collection('ordenes').doc(id).valueChanges()
  }

  obtenerServicios(id) {
    return this.empresa.collection('ordenes').doc(id).collection('ordenServicios').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

  modificarServicio(orden, datos){
    return this.empresa.collection('ordenes').doc(orden).update(datos);
  }
}
