import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.scss'],
  animations: [routerTransition()]
})
export class CrearOrdenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
