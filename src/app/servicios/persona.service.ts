import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private personasCollection: AngularFirestoreCollection;
  private userDoc: AngularFirestoreDocument;
  personas: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.personasCollection = afs.collection('persona');
    this.userDoc = this.afs.doc(localStorage.getItem('empresa'));

  }

  crearPersona(persona) {
    const id = this.afs.createId();
   return this.userDoc.collection('personas').doc(id).set(persona);
  }

  obtenerPersonas() {

    this.userDoc = this.afs.doc(localStorage.getItem('empresa'));
    return this.userDoc.collection('personas').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );

    //this.userDoc.collection<Task>('tasks').valueChanges();
    //return this.userDoc.collection('persona').valueChanges();
  }
}
