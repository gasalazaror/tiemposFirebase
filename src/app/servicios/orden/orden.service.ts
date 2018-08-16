import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private empresa: AngularFirestoreDocument;

  constructor(private readonly afs: AngularFirestore) {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
  }

  crearOrden(orden) {
  
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    const id = this.afs.createId();
    return this.empresa.collection('ordenes').doc(id).set(orden)
  }
}
