import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.scss']
})
export class RecuperacionComponent implements OnInit {

  usuario = {
    email: ''
  }

  error = ''
  success = false

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  enviar(){

    console.log(this.usuario)

    this.afAuth.auth.sendPasswordResetEmail(this.usuario.email).then(envio=>{
      this.error = ''
      this.success = true
      this.usuario.email = ''
    }, error=>{
      console.log(error)
    this.error = error.message
    this.success = false
    })
  }
}
