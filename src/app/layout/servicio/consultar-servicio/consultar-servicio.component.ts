import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { ServicioService } from '../../../servicios/servicio/servicio.service';


@Component({
  selector: 'app-consultar-servicio',
  templateUrl: './consultar-servicio.component.html',
  styleUrls: ['./consultar-servicio.component.scss'],
  animations: [routerTransition()]
})
export class ConsultarServicioComponent implements OnInit {

  servicios: Observable<any[]>;

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.obtenerServicios()
  }

  obtenerServicios() {
    this.servicios = this.servicioService.obtenerServicios()

    this.servicios.forEach(element => {
      console.log(element)
    });
  }

}
