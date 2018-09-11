import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    usuario: any = { email: '', password: '' }
    private itemDoc: AngularFirestoreDocument;
    item: Observable<any>;
    empresas: Observable<any>;
    listaEmpresas: any[];
    error: any
    empresaSeleccionada: any

    personaForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
       
      })

    constructor(private fb: FormBuilder,public router: Router, public afAuth: AngularFireAuth, public db: AngularFirestore) {
        this.error = ''
        this.listaEmpresas = []
        this.empresaSeleccionada = ''
    }

    ngOnInit() {

    }

    onLoggedin() {
        this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
            .then((usuario: any) => {
                this.itemDoc = this.db.doc('usuario/' + this.afAuth.auth.currentUser.uid);
                this.item = this.itemDoc.valueChanges();
                this.item.subscribe(usuario => {

                    localStorage.setItem('usuario', usuario.nombre);
                    localStorage.setItem('empresa', usuario.empresa.path);
                    localStorage.setItem('isLoggedin', 'true');
                    this.router.navigate(['/']);


                })

            }, error => {
                this.error = 'Usuario o contraseña incorrectos'
            })
    }

    onLoggedin2() {
        // this.afAuth.auth.setPersistence('none').then(usuario => {
            
        // })

        this.afAuth.auth.signInWithEmailAndPassword(this.personaForm.value.email, this.personaForm.value.password)
        .then((usuario: any) => {
           

            this.error = ''
            this.itemDoc = this.db.doc('usuario/' + this.afAuth.auth.currentUser.uid);
            this.empresas = this.db.collection('empresaUsuario',
                query => query.where('correo', '==', this.personaForm.value.email).where('tipo', '==', 'usuario')).valueChanges()
            this.empresas.subscribe(res => {
                this.listaEmpresas = []
                res.forEach(elemento => {
                    this.itemDoc = this.db.doc(elemento.empresa.path)
                    this.itemDoc.valueChanges().subscribe(res => {
                        res.path = elemento.empresa.path;
                        this.listaEmpresas.push(res)
                    })
                });

                
            })

        }, error => {
            this.error = 'Correo o contraseña incorrectos'
        
        })


    }

    seleccionarEmpresa() {


         localStorage.setItem('empresa', this.empresaSeleccionada);
         localStorage.setItem('isLoggedin', 'true');
         this.router.navigate(['/']);
    }


}
