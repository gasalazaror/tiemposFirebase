import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Observable } from 'rxjs';
import { OrdenService } from '../../servicios/orden/orden.service';
import * as moment from 'moment';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss'],
  animations: [routerTransition()]
})
export class ReporteComponent implements OnInit {

  ordenes: Observable<any[]>;
  tareas: any[]

  constructor(private ordenService: OrdenService) {




    this.tareas = []
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
          if (servicio.estado == 'POR FACTURAR') {


            var fecha1 = moment(servicio.horaInicio.seconds, 'X');
            var fecha2 = moment(servicio.horaFin.seconds, 'X');
            var diff = fecha2.diff(fecha1, 's');
            servicio.leadTimesec = diff
            const leadTime = moment.utc(diff * 1000).format('HH:mm:ss');
            servicio.leadTime = leadTime
            const formatted = moment.utc((servicio.tiempoEstandar * 60) * 1000).format('HH:mm:ss');
            servicio.tiempoEstandarFor = formatted

            var pausas = 0

            if (servicio.pausas) {
              servicio.pausas.forEach(pausa => {
                var fecha1 = moment(pausa.horaInicio.seconds, 'X');
                var fecha2 = moment(pausa.horaFin.seconds, 'X');
                var diff2 = fecha2.diff(fecha1, 's');
                pausas += diff2
              });
              
            }

            console.log('leadtime '+servicio.leadTimesec)
            console.log('pausas '+pausas)
       

          
            
            var tiempoReal  =  servicio.leadTimesec - pausas
            
            servicio.tiempoReal = moment.utc((tiempoReal) * 1000).format('HH:mm:ss');

            const eficiencia = ((servicio.tiempoEstandar*60)/tiempoReal)*100

            servicio.eficiencia = eficiencia.toFixed(2)

            this.tareas.push({ cliente: element.data.cliente, servicio: servicio, vehiculo: element.data.vehiculo })


          }

        });


      });
    })
  }
}
