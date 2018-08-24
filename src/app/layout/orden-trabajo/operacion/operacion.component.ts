import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { OrdenService } from '../../../servicios/orden/orden.service';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.scss'],
  animations: [routerTransition()]
})
export class OperacionComponent implements OnInit {

  ordenes: Observable<any[]>;
  tareas: any

  constructor(private ordenService: OrdenService) {

  }

  ngOnInit() {
    this.obtenerOrdenes()
  }
  obtenerOrdenes() {
    this.ordenes = this.ordenService.obtenerOrdenes();

    this.ordenes.subscribe(res => {
      this.tareas = []
      res.forEach(element => {
        element.data.servicios.forEach(servicio => {


          if (!servicio.operador) {
            servicio.operador = { data: { nombre: '' } }
          }

          const motivo = ''
          if (servicio.pausas) {
            servicio.pausas.forEach(pausa => {
              if (pausa.id == servicio.pausaActual) {
                servicio.motivo = pausa.motivo.motivo
              }
            });
          }


          this.tareas.push({ cliente: element.data.cliente, servicio: servicio, vehiculo: element.data.vehiculo })


        });
        console.log(this.tareas)

      });
    })

  }
}
