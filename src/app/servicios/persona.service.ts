import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { query } from '../../../node_modules/@angular/core/src/render3/query';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private personasCollection: AngularFirestoreCollection;
  private empresa: AngularFirestoreDocument;
  private personaDoc: AngularFirestore
  personas: Observable<any[]>;
  persona: Observable<any[]>;



  constructor(private readonly afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.personasCollection = afs.collection('persona');
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));

  }

  crearPersona(persona) {
    const id = this.afs.createId();
    return this.empresa.collection('personas').doc(id).set(persona);
  }

  comprobar(valor, campo){
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));

    return this.empresa.collection('personas', query=>query.where(valor, '==', campo)).stateChanges()
  }

  modificarPersona(id, persona) {
    return this.empresa.collection('personas').doc(id).update(persona);
  }

  eliminarPersona(idPersona) {
    return this.empresa.collection('personas').doc(idPersona).delete()
  }

  obtenerPersonas() {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('personas', query=>query.orderBy('nombre')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

  obtenerUsuarios() {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('personas', query => query.where('empleado', '==', true)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

  obtenerClientes() {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('personas', query => query.where('cliente', '==', true)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

  obtenerVehiculos(uid) {
    const userRef = this.afs.collection('personas').doc(uid)
    return this.empresa.collection('vehiculos', query => query.where('dueno', '==', userRef.ref)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

  obtenerUnaPersona(id) {
    return this.empresa.collection('personas').doc(id).valueChanges()
  }

  obtenerUsuario(){
    return this.afAuth.user
  }

  obtenerEmpresa(){
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa
  }
}
