import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { OrdenService } from '../../../../servicios/orden/orden.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from 'angularfire2/firestore';
import { routerTransition } from '../../../../router.animations';

import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.scss'],
  animations: [routerTransition()]
})
export class DetalleOrdenComponent implements OnInit {

  id: any
  orden: Observable<any>;
  servicios: any;
  newIndex: any
  closeResult: string;
  pausa = {
    motivo: '',
    observacion: ''
  }

  servicioSeleccionado: any

  constructor(private route: ActivatedRoute,
    private modalService: NgbModal,
    private ordenService: OrdenService,
    private db: AngularFirestore) {

    this.servicios = []
    this.id = this.route.snapshot.paramMap.get('id');
    this.orden = this.ordenService.obtenerUnaOrden(this.id);
    this.orden.subscribe(res => {
      this.servicios = res.servicios

    this.servicios.forEach(servicio => {
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
            console.log(pausa)
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

        this.servicios.push({ servicio: servicio,  })
      

      }
    });
  

    })

  }

  ngOnInit() {
  }

  iniciarServicio(index) {
    const confirmacion = confirm("¿Está seguro que desea iniciar la tarea seleccionada?")
    if (confirmacion) {
      this.servicios[index].estado = 'EN PRODUCCIÓN'
      this.servicios[index].horaInicio = new Date()
      this.ordenService.modificarServicio(this.id, { servicios: this.servicios })
    } else {
    }
  }

  finalizarServicio(index) {
    const confirmacion = confirm("¿Está seguro que desea finalizar la tarea seleccionada?")
    if (confirmacion) {
      this.servicios[index].estado = 'POR FACTURAR'
      this.servicios[index].horaFin = new Date()
      this.ordenService.modificarServicio(this.id, { servicios: this.servicios })
    } else {
    }
  }

  open(content, index) {
    this.servicioSeleccionado = this.servicios[index]



    // const leadTime = moment.utc(diff * 1000).format('HH:mm:ss');



    this.newIndex = index
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

    });
  }

  open2(content, index) {
    this.servicioSeleccionado = this.servicios[index]

    //tiempo estandar

    this.servicioSeleccionado.te = moment.utc((this.servicioSeleccionado.tiempoEstandar * 60) * 1000).format('HH:mm:ss');

    //leadtime
    var fecha1 = moment(this.servicioSeleccionado.horaInicio.seconds, 'X');
    var fecha2 = moment(this.servicioSeleccionado.horaFin.seconds, 'X');
    var diff = fecha2.diff(fecha1, 's');
    var lead = fecha2.diff(fecha1, 's')
    this.servicioSeleccionado.leadTime = moment.utc(diff * 1000).format('HH:mm:ss');

    //pausas

    var pausas = 0

    if (this.servicioSeleccionado.pausas) {


      this.servicioSeleccionado.pausas.forEach(pausa => {
   
        var fecha1 = moment(pausa.horaInicio.seconds, 'X');
        var fecha2 = moment(pausa.horaFin.seconds, 'X');
        var diff2 = fecha2.diff(fecha1, 's');
        pausas += diff2

      });

    } else {

    }

    this.servicioSeleccionado.tiempoPausas = moment.utc(pausas * 1000).format('HH:mm:ss');


    //tiempo real
    const real  = lead-pausas
    this.servicioSeleccionado.tiempoReal = moment.utc(real * 1000).format('HH:mm:ss');


    const eficiencia = ((this.servicioSeleccionado.tiempoEstandar*60)/real)*100

    this.servicioSeleccionado.eficiencia = eficiencia.toFixed(2)



    this.newIndex = index
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

    });
  }

  pausar() {
    const id = this.db.createId()

    if (!this.servicios[this.newIndex].pausas) {
      this.servicios[this.newIndex].pausas = []
    }
    this.servicios[this.newIndex].estado = 'EN PRODUCCIÓN - PAUSADO'
    this.servicios[this.newIndex].pausaActual = id
    this.servicios[this.newIndex].motivoPausa = this.pausa.motivo
    this.servicios[this.newIndex].pausas.push({ horaInicio: new Date(), motivo: this.pausa, id: id })
    this.ordenService.modificarServicio(this.id, { servicios: this.servicios })
  }

  reanudarServicio(indice) {

    const confirmacion = confirm("¿Está seguro que desea reanudar la tarea seleccionada?")
    if (confirmacion) {
      this.servicios[indice].estado = 'EN PRODUCCIÓN'
      this.servicios[indice].pausas.forEach(pausa => {
        if (pausa.id == this.servicios[indice].pausaActual) {
          pausa.horaFin = new Date()
        }
      });
      this.ordenService.modificarServicio(this.id, { servicios: this.servicios })
    }

  }

}
