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
    error: any

    constructor(public router: Router, public afAuth: AngularFireAuth, public db: AngularFirestore) {
        this.error = ''
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


}
