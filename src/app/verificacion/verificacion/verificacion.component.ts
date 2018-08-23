import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.scss']
})
export class VerificacionComponent implements OnInit {

  id = ''

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private afAuth: AngularFireAuth) {
    
  //  this.afAuth.auth.send
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
