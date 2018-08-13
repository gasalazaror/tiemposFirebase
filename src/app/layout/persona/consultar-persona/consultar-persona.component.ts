import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { PersonaService } from '../../../servicios/persona.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

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

    this.obtenerPersonas()
  }

  ngOnInit() {
  }

  obtenerPersonas() {
    this.personas =this.personaService.obtenerPersonas()
  }

  verPersona(persona){
    console.log(persona)
  }

}
