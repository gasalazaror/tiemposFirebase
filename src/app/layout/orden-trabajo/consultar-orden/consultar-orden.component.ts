import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { OrdenService } from '../../../servicios/orden/orden.service';

@Component({
  selector: 'app-consultar-orden',
  templateUrl: './consultar-orden.component.html',
  styleUrls: ['./consultar-orden.component.scss'],
  animations: [routerTransition()]
})
export class ConsultarOrdenComponent implements OnInit {

  ordenes: Observable<any[]>;


  constructor(private ordenService: OrdenService) { }

  ngOnInit() {
    this.obtenerOrdenes()
  }

  obtenerOrdenes() {
    this.ordenes =this.ordenService.obtenerOrdenes();

    this.ordenes.forEach(element => {
      console.log(element)
    });
  
  }

}
