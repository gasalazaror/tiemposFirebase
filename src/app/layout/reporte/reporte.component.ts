import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Observable } from 'rxjs';
import { OrdenService } from '../../servicios/orden/orden.service';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { PersonaService } from '../../servicios/persona.service';
import { ServicioService } from '../../servicios/servicio/servicio.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss'],
  animations: [routerTransition()]
})
export class ReporteComponent implements OnInit {

  filtro: String = "1"
  fechaInicio: Date = new Date
  ordenes: Observable<any>
  ordenSeleccionada: any= ""


  operadores: Observable<any>
  servicios: Observable<any>
  filtroTiempo: any = { inicio: this.convertir(Date.now()), iniciohora: '00:00', fin: this.convertir(Date.now()), finhora: '23:59' }
  operaciones: Observable<any>


  constructor(private ordenService: OrdenService, private personaService: PersonaService, private servicioService: ServicioService) {
    this.ordenes = ordenService.obtenerOrdenes();
    this.operadores = personaService.obtenerUsuarios()
    this.servicios = servicioService.obtenerServicios()

  }

  convertir(fecha) {
    var local = new Date(fecha);
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  }

  ngOnInit() {

  }

  obtenerOrdenes() {

  }

  buscar() {
    switch (this.filtro) {
      case "1":
        this.buscarPorOrden()
        break;
      case "2":
        this.buscarPorOperador()
        break;
      case "3":
      this.buscarPorServicio()
        break;

      default:
        break;
    }
  }

  buscarPorOrden() {
    console.log('orden')
    console.log(this.ordenSeleccionada)
  }

  buscarPorOperador() {
    console.log('operador')
  }

  buscarPorServicio() {
    console.log('servicio')
  }

}
