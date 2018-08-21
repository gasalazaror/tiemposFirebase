import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../../servicios/persona.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';




@Component({
  selector: 'app-informacion-persona',
  templateUrl: './informacion-persona.component.html',
  styleUrls: ['./informacion-persona.component.scss'],
  animations: [routerTransition()]
})
export class InformacionPersonaComponent implements OnInit {
  id: any
  persona: Observable<any>;
  personaq: any
  empresa: AngularFirestoreDocument

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService,
    private auth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.persona = this.personaService.obtenerUnaPersona(this.id)
    this.persona.subscribe(res => {
      this.personaq = res
    })
  }

  ngOnInit() {
  }

  generarUsuario(persona) {
    this.empresa = this.db.doc(localStorage.getItem('empresa'));
    console.log(this.personaq)
    this.auth.auth.createUserWithEmailAndPassword(this.personaq.correo, this.personaq.cedula)
      .then(ususario => {

        this.db.collection('usuario').doc(this.auth.auth.currentUser.uid).set({empresa:this.empresa.ref, nombre: this.personaq.nombre, id: this.auth.auth.currentUser.uid});
        this.empresa.collection('personas').doc(this.id).update({usuario: this.auth.auth.currentUser.uid})
       // console.log(this.auth.auth.currentUser.sendEmailVerification())
        console.log(ususario)
      }, err => {
        this.db.collection('usuario').doc(this.auth.auth.currentUser.uid).set({empresa:this.empresa.ref, nombre: this.personaq.nombre,  id: this.auth.auth.currentUser.uid});
        this.empresa.collection('personas').doc(this.id).update({usuario: this.auth.auth.currentUser.uid})
      })



  }



}
