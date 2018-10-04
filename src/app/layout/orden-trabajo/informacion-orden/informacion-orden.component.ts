import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { OrdenService } from '../../../servicios/orden/orden.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PersonaService } from '../../../servicios/persona.service';
import swal from 'sweetalert2'
import * as moment from 'moment';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ReporteService } from '../../../servicios/reporte/reporte.service';

@Component({
  selector: 'app-informacion-orden',
  templateUrl: './informacion-orden.component.html',
  styleUrls: ['./informacion-orden.component.scss'],
  animations: [routerTransition()]

})
export class InformacionOrdenComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 10,
    autoWidth: true,
    language: {
      processing: "Procesando...",
      search: "Buscar:",
      lengthMenu: "Mostrar _MENU_ elementos",
      info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
      infoEmpty: "Mostrando ningún elemento.",
      infoFiltered: "(filtrado _MAX_ elementos total)",
      infoPostFix: "",
      loadingRecords: "Cargando registros...",
      zeroRecords: "No se encontraron registros",
      emptyTable: "No hay datos disponibles en la tabla",
      paginate: {
        first: "Primero",
        previous: "Anterior",
        next: "Siguiente",
        last: "Último"
      },
      aria: {
        sortAscending: ": Activar para ordenar la tabla en orden ascendente",
        sortDescending: ": Activar para ordenar la tabla en orden descendente"
      }
    }

  };;
  dtTrigger: Subject<any> = new Subject();

  id: any
  orden: any;
  ordenReporte: any = []
  servicios: any;
  serviciosOperaciones: any;
  newIndex: any
  servicioSeleccionado: any
  closeResult: string;
  observacion: String = ''

  pausa = {
    motivo: '',
    observacion: ''
  }

  personas: Observable<any[]>;

  PersonaForm = this.fb.group({
    persona: [{}, Validators.required]
  })

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private ordenService: OrdenService,
    private fb: FormBuilder,
    private personaService: PersonaService,
    private modalService: NgbModal,
    private reporteService: ReporteService
  ) {
    this.servicios = []
    this.serviciosOperaciones = []
    this.id = this.route.snapshot.paramMap.get('id');
    this.orden = this.ordenService.obtenerUnaOrden(this.id);
    this.orden.subscribe(res => {
      if(res.observacion){
        this.observacion = res.observacion
      }
      this.ordenReporte = res
  
      $('#example-datatable').DataTable().destroy();
      this.servicios = res.servicios
      this.serviciosOperaciones = res.servicios
      this.dtTrigger.next()
    })
    this.personas = this.personaService.obtenerUsuarios();


  }

  imprimirReporte() {
    this.reporteService.reporteCliente(this.ordenReporte)
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

  seleccionarPersona(servicio, index) {


    if (servicio.operador.id == "") {
      swal('Existió un error', 'Debe seleccionar un operador', 'error')
    } else {
      swal({
        title: 'Está seguro?',
        text: "Desea asignar al operador: " + servicio.operador.data.nombre + " al servicio: " + servicio.descripcion,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, asignar!'
      }).then((result) => {
        if (result.value) {
          $('#example-datatable').DataTable().destroy();

          this.servicios[index].operador = servicio.operador
          this.servicios[index].estado = 'EN ESPERA DE PRODUCCIÓN'
          this.ordenService.modificarServicio(this.id, { servicios: this.servicios, estado: 'EN ESPERA DE PRODUCCIÓN' })
          .then(res=>{
            this.dtTrigger.next()
            swal(
              'Listo!',
              'El operador ha sido asignado correctamente.',
              'success'
            )
          })
          
        }
      })
    }
  }

  reanudarServicio(indice) {
    swal({
      title: 'Está seguro?',
      text: "Desea reanudar la operación seleccionada?",
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
            'La operación ha sido reanudada',
            'success'
          )
        })
      }
    })
  }

  calcularEstadisticas(index) {
  

    //tiempo estandar
    const tiempoEstandar = moment.utc((this.servicios[index].tiempoEstandar * 60) * 1000).format('HH:mm:ss');
    const tiempoEstandarSec = (this.servicios[index].tiempoEstandar * 60) * this.servicios[index].cantidad


    //leadtim
    var fecha1 = moment(this.servicios[index].horaInicio.seconds, 'X');
    var fecha2 = moment(this.servicios[index].horaFin.seconds, 'X');
    var diff = fecha2.diff(fecha1, 's');
    var lead = fecha2.diff(fecha1, 's')
    const leadTime = moment.utc(diff * 1000).format('HH:mm:ss');

    //pausas

    var pausas = 0

    if (this.servicios[index].pausas) {
      this.servicios[index].pausas.forEach(pausa => {
        var fecha1 = moment(pausa.horaInicio.seconds, 'X');
        var fecha2 = moment(pausa.horaFin.seconds, 'X');
        var diff2 = fecha2.diff(fecha1, 's');
        pausas += diff2
      });
    } 



    //tiempo real
    const real = lead - pausas
    var tiempoReal = moment.utc(real * 1000).format('HH:mm:ss');


    const eficiencia = (((tiempoEstandarSec) / real) * 100).toFixed(2)


    return {
      eficiencia: eficiencia,
      tiempoReal: real,
      pausas: pausas,
      leadTime: lead,
      tiempoEstandar: tiempoEstandarSec
    }

  }


  iniciarServicio(index) {

    swal({
      title: 'Está seguro?',
      text: "Desea inicia la operación seleccionada!",
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
              'La operación ha sido iniciada',
              'success'
            )
          })

      }
    })

  }

  pausar() {
    const id = this.db.createId()
    if (!this.servicios[this.newIndex].pausas) {
      this.servicios[this.newIndex].pausas = []
    }
    swal({
      title: 'Está seguro?',
      text: "Desea pausar la operación seleccionada!",
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
              'La operación ha sido pausada',
              'success'
            )
          })

      }
    })


  }


  finalizarServicio(index) {

    swal({
      title: 'Está seguro?',
      text: "Desea finalizar la operación seleccionada?",
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
            'La operación ha sido finalizada',
            'success'
          )
        })
        
      })

      }
    })
  }

  ngOnInit() {

  }

}




