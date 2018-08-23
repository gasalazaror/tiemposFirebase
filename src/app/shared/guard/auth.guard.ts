import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';



@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private afAuth: AngularFireAuth) { }

    canActivate() {
        if (localStorage.getItem('isLoggedin')) {

            this.comprobarUsuario()

            return true;

        }

        this.router.navigate(['/login']);
        return false;
    }

    comprobarUsuario() {
        this.afAuth.auth.onAuthStateChanged(res => {
            if (res) {
            
                if(res.emailVerified){
                 
                }else{
          
                }
            } else {
             //   this.router.navigate(['/login']);
                
            }
        })
    }





}
