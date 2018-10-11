import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private personasCollection: AngularFirestoreCollection;
  private empresa: AngularFirestoreDocument;
  private personaDoc: AngularFirestore
  personas: Observable<any[]>;
  persona: Observable<any[]>;



  constructor(private readonly afs: AngularFirestore, private afAuth: AngularFireAuth) {

    this.empresa = this.afs.doc(localStorage.getItem('empresa'));

  }

  crearPersona(persona) {
    const id = this.afs.createId();
    return this.empresa.collection('personas').doc(id).set(persona);
  }

  obtenerUsuarios(){
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));

    return this.afs.collection('empresaUsuario', query => query.where('empresa','==',this.empresa.ref)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
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

  
}
