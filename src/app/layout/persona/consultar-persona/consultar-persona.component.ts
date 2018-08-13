import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { PersonaService } from '../../../servicios/persona.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-consultar-persona',
  templateUrl: './consultar-persona.component.html',
  styleUrls: ['./consultar-persona.component.scss'],
  animations: [routerTransition()]
})
export class ConsultarPersonaComponent implements OnInit {

  personas: Observable<any[]>;
  private userDoc: AngularFirestoreDocument;

  constructor(private personaService: PersonaService, private readonly afs: AngularFirestore) {
    this.userDoc = this.afs.doc(localStorage.getItem('empresa'));



  //  this.personas = this.userDoc.collection('persona').valueChanges();

    this.personas = this.afs.collection('persona').valueChanges()


  }

  ngOnInit() {
  }

  obtenerPersonas() {
    this.personas = this.personaService.obtenerPersonas()

    this.personas.forEach(element => {
      console.log(element)
    });
  }

}
