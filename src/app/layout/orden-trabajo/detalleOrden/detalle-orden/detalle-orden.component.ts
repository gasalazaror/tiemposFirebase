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
import swal from 'sweetalert2'

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.scss'],
  animations: [routerTransition()]
})
export class DetalleOrdenComponent implements OnInit {

  id: any
  orden: Observable<any>;
  tiempoEstandar: number = 0;
  tiempoEstandarFor: any;

  tiempoReal: number = 0;
  tiempoRealFor: any;

  finalizadas: number = 0
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
      this.tiempoEstandar = 0
      this.finalizadas = 0
      this.tiempoReal = 0
      this.servicios.forEach(element => {


       

      });



    })

  }

  ngOnInit() {
  }

  iniciarServicio(index) {

    swal({
      title: 'Está seguro?',
      text: "Desea inicia la tarea seleccionada!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, iniciar!'
    }).then((result) => {
      if (result.value) {
        this.servicios[index].estado = 'EN PRODUCCIÓN'
        this.servicios[index].horaInicio = new Date()
        this.ordenService.modificarServicio(this.id, { servicios: this.servicios })
          .then(res => {
            swal(
              'Listo!',
              'La tarea ha sido iniciada',
              'success'
            )
          })

      }
    })



  }

  calcularEstadisticas(index) {
    console.log('ESTADISTICAS')
    console.log(this.servicios[index])

    //tiempo estandar
    const tiempoEstandar = moment.utc((this.servicios[index].tiempoEstandar * 60) * 1000).format('HH:mm:ss');
    const tiempoEstandarSec = (this.servicios[index].tiempoEstandar * 60) * this.servicios[index].cantidad

    console.log(tiempoEstandarSec)
    //leadtim
    var fecha1 = moment(this.servicios[index].horaInicio.seconds, 'X');
    var fecha2 = moment(this.servicios[index].horaFin.seconds, 'X');
    var diff = fecha2.diff(fecha1, 's');
    var lead = fecha2.diff(fecha1, 's')
    const leadTime = moment.utc(diff * 1000).format('HH:mm:ss');
    console.log(lead)
    //pausas

    var pausas = 0

    if (this.servicios[index].pausas) {


      this.servicios[index].pausas.forEach(pausa => {

        var fecha1 = moment(pausa.horaInicio.seconds, 'X');
        var fecha2 = moment(pausa.horaFin.seconds, 'X');
        var diff2 = fecha2.diff(fecha1, 's');
        pausas += diff2

      });

    } else {

    }

    console.log(pausas)
    const pausasTime = moment.utc(pausas * 1000).format('HH:mm:ss');




    //tiempo real
    const real = lead - pausas
    var tiempoReal = moment.utc(real * 1000).format('HH:mm:ss');

    console.log(real)
    const eficiencia = (((this.servicios[index].tiempoEstandar * 60) / real) * 100).toFixed(2)

    console.log(eficiencia)

    return {
      eficiencia: eficiencia,
      tiempoReal: real,
      pausas: pausas,
      leadTime: lead,
      tiempoEstandar: tiempoEstandarSec
    }

  }



  finalizarServicio(index) {

    swal({
      title: 'Está seguro?',
      text: "Desea finalizar la tarea seleccionada?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, finalizar!'
    }).then((result) => {
      if (result.value) {
        this.servicios[index].estado = 'POR FACTURAR'
      this.servicios[index].horaFin = new Date()
      this.ordenService.modificarServicio(this.id, { servicios: this.servicios }).then(res => {

        this.servicios[index].estadisticas = this.calcularEstadisticas(index)
        this.ordenService.modificarServicio(this.id, { servicios: this.servicios }).then(res=>{
          swal(
            'Listo!',
            'La tarea ha sido finalizada',
            'success'
          )
        })
        
      })

      }
    })




   
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


    swal({
      title: 'Está seguro?',
      text: "Desea pausar la tarea seleccionada!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, pausar!'
    }).then((result) => {
      if (result.value) {

        this.servicios[this.newIndex].estado = 'EN PRODUCCIÓN - PAUSADO'
        this.servicios[this.newIndex].pausaActual = id
        this.servicios[this.newIndex].motivoPausa = this.pausa.motivo
        this.servicios[this.newIndex].pausas.push({ horaInicio: new Date(), motivo: this.pausa, id: id })
        this.ordenService.modificarServicio(this.id, { servicios: this.servicios })
          .then(res => {
            swal(
              'Listo!',
              'La tarea ha sido pausada',
              'success'
            )
          })

      }
    })


  }

  reanudarServicio(indice) {


    swal({
      title: 'Está seguro?',
      text: "Desea reanudar la tarea seleccionada?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, reanudar!'
    }).then((result) => {
      if (result.value) {

        this.servicios[indice].estado = 'EN PRODUCCIÓN'
        this.servicios[indice].pausas.forEach(pausa => {
          if (pausa.id == this.servicios[indice].pausaActual) {
            pausa.horaFin = new Date()
          }
        });
        this.ordenService.modificarServicio(this.id, { servicios: this.servicios }).then(res => {
          swal(
            'Listo!',
            'La tarea ha sido reanudada',
            'success'
          )
        })


      }
    })



  }

}
