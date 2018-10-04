import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../../servicios/persona.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import swal from 'sweetalert2'



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


  
    this.auth.auth.createUserWithEmailAndPassword(this.personaq.correo, this.personaq.cedula)
      .then(ususario => {
        const id = this.db.createId()
        this.user = this.db.doc('usuario/'+this.auth.auth.currentUser.uid);
        this.db.collection('empresaUsuario').doc(id).set({empresa: this.empresa.ref, correo: this.personaq.correo, tipo: 'usuario'})
        .then(user=>{
          swal( 'Listo!','Persona guardada exitosamente', 'success');
          this.empresa.collection('personas').doc(this.id).update({usuario: this.auth.auth.currentUser.uid})
         
        })


     
      }, err => {
      
     

        this.auth.user.subscribe(res=>{
 
        })

        this.user = this.db.doc('usuario/'+this.auth.auth.currentUser.uid);

  
     
        this.db.collection('empresaUsuario', 
        query=>query.where('empresa','==',this.empresa.ref).where('email','==',this.personaq.correo)).valueChanges().subscribe(res=>{
     
          if (res.length==0) {
            const id = this.db.createId()
            this.db.collection('empresaUsuario').doc(id).set({empresa: this.empresa.ref, correo: this.personaq.correo, tipo: 'usuario'})
            .then(user=>{
          
              this.empresa.collection('personas').doc(this.id).update({usuario: this.auth.auth.currentUser.uid})
              swal( 'Listo!','Usuario creado correctamente', 'success');
            })
          } else {
      
            this.error = 'Ya existe un usuario con el correo electrónico ingresado'
          }
        })
    
     //   this.db.collection('usuario').doc(this.auth.auth.currentUser.uid).set({empresa:this.empresa.ref, nombre: this.personaq.nombre,  id: this.auth.auth.currentUser.uid});
    //    
      })
  }

  enviarCorreoRecuperacion(persona){

    this.auth.auth.sendPasswordResetEmail(persona.correo).then(email=>{
      alert('Se envió un email de recuperación correctamente')
    },error=>{
      alert('Existió un error al enviar el email de recuperación')
    })
  }

  modificarRoles(){
    this.personaService.modificarPersona(this.id, {roles: this.personaq.roles})
  }





} 