import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


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

    constructor(public router: Router, public afAuth: AngularFireAuth, public db: AngularFirestore) {
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

        this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
        .then((usuario: any) => {
            if (usuario.user.emailVerified) {
                this.error = ''
                this.itemDoc = this.db.doc('usuario/' + this.afAuth.auth.currentUser.uid);
                this.empresas = this.db.collection('empresaUsuario',
                    query => query.where('correo', '==', this.usuario.email).where('tipo', '==', 'usuario')).valueChanges()
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

            } else {
                this.router.navigate(['/recuperacion']);
            }

        }, error => {
            this.error = error.message
            console.log(error)
        })


    }

    seleccionarEmpresa() {
        console.log(this.empresaSeleccionada)

         localStorage.setItem('empresa', this.empresaSeleccionada);
         localStorage.setItem('isLoggedin', 'true');
         this.router.navigate(['/']);
    }


}
