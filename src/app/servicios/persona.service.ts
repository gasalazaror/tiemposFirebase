import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

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

  crearPersona(persona){
    const id = this.afs.createId();
    this.personasCollection.doc(id).set(persona)
    return this.personasCollection.doc(id).update({ref: this.userDoc});
  }

  obtenerPersonas(){
    return this.userDoc.collection('persona').valueChanges();
  }
}
