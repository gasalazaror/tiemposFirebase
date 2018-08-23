import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../../servicios/persona.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Alert } from 'selenium-webdriver';




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
  user: AngularFirestoreDocument
  error = ''

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
        const id = this.db.createId()
        this.user = this.db.doc('usuario/'+this.auth.auth.currentUser.uid);
        this.db.collection('empresaUsuario').doc(id).set({empresa: this.empresa.ref, usuario: this.user.ref, correo: this.personaq.correo, tipo: 'usuario'})
        .then(user=>{
          console.log(user)
          this.empresa.collection('personas').doc(this.id).update({usuario: this.auth.auth.currentUser.uid})
          alert('usuario')
        })


     
      }, err => {
      
        console.log(this.auth.auth.currentUser.uid)

        this.auth.user.subscribe(res=>{
          console.log(res)
        })

        this.user = this.db.doc('usuario/'+this.auth.auth.currentUser.uid);

  
     
        this.db.collection('empresaUsuario', 
        query=>query.where('empresa','==',this.empresa.ref).where('email','==',this.personaq.correo)).valueChanges().subscribe(res=>{
     
          if (res.length==0) {
            const id = this.db.createId()
            this.db.collection('empresaUsuario').doc(id).set({empresa: this.empresa.ref, usuario: this.user.ref, tipo: 'usuario'})
            .then(user=>{
          
              this.empresa.collection('personas').doc(this.id).update({usuario: this.auth.auth.currentUser.uid})
              alert('usuario')
            })
          } else {
            console.log('Ya existe un usuario con el correo electrónico ingresado')
            this.error = 'Ya existe un usuario con el correo electrónico ingresado'
          }
        })
        console.log(err)
     //   this.db.collection('usuario').doc(this.auth.auth.currentUser.uid).set({empresa:this.empresa.ref, nombre: this.personaq.nombre,  id: this.auth.auth.currentUser.uid});
    //    
      })
  }

  enviarCorreoRecuperacion(persona){
    console.log(persona)
    this.auth.auth.sendPasswordResetEmail(persona.correo).then(email=>{
      alert('Se envió un email de recuperación correctamente')
    },error=>{
      alert('Existió un error al enviar el email de recuperación')
    })
  }





} 