import { Component, OnInit, forwardRef, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { PersonaService } from '../../../servicios/persona.service';
import { Observable, Subject } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehiculoService } from '../../../servicios/vehiculo/vehiculo.service';
import { ServicioService } from '../../../servicios/servicio/servicio.service';
import { OrdenService } from '../../../servicios/orden/orden.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2'
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.scss'],
  animations: [routerTransition()]
})
export class CrearOrdenComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 50,
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

  persona: any;
  personas: Observable<any[]>;
  personaSeleccionada: any
  vehiculoSeleccionado: any
  vehiculoSeleccionadoaux: any
  closeResult: string;
  vehiculos: Observable<any[]>;
  servicios: Observable<any[]>;
  ultimaOrden: Observable<any[]>;
  numeroOrden: number = 0;
  serviciosSeleccionados: any[];

  id: any
  orden: Observable<any>;
  serviciosRes: any;



  ClienteForm = this.fb.group({
    persona: [{}, Validators.required]
  })

  ServicioForm = this.fb.group({
    servicio: [{}, Validators.required]
  })

  VehiculoForm = this.fb.group({
    vehiculo: [{}, Validators.required]
  })

  constructor(
    private personaService: PersonaService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    public router: Router,
    private vehiculoService: VehiculoService,
    private servicioService: ServicioService,
    private ordenService: OrdenService,
    private route: ActivatedRoute,

  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.serviciosSeleccionados = []

    if (this.id != 'nuevo') {

      this.orden = this.ordenService.obtenerUnaOrden(this.id);
      this.orden.subscribe(res => {
        this.personaSeleccionada = { data: res.cliente };
        this.vehiculoSeleccionado = { data: res.vehiculo }

        this.serviciosRes = res.servicios
        this.serviciosSeleccionados = []
        this.serviciosRes.forEach(element => {

          this.serviciosSeleccionados.push({ data: element })
          this.numeroOrden = res.numero
        });

      })
    } else {
      this.ultimaOrden = this.ordenService.obtenerUltimaOrden();

      this.ultimaOrden.subscribe(res => {
        if (res[0]) {
          this.numeroOrden = res[0].numero + 1
        } else {

          this.personaService.obtenerEmpresa().valueChanges().subscribe(res => {
            this.numeroOrden = res.otInicio
          })


        }

      })

    }




    this.vehiculos = this.vehiculoService.obtenerVehiculos()



  }




  ngOnInit() {
    this.obtenerPersonas()
    this.obtenerServicios()
  }

  obtenerPersonas() {
    this.personas = this.personaService.obtenerClientes()
  }

  obtenerServicios() {
    this.servicios = this.servicioService.obtenerServicios()
  }

  seleccionarPersona() {

    this.personaSeleccionada = this.ClienteForm.value.persona
    // this.VehiculoForm = this.fb.group({
    //   vehiculo: [{}, Validators.required]
    // })
    // this.vehiculos = this.personaService.obtenerVehiculos(this.personaSeleccionada.id)
  }

  seleccionarServicio() {

    $('#example-datatable').DataTable().destroy();
    if (this.ServicioForm.value.servicio.data) {

      this.ServicioForm.value.servicio.data.estado = 'CITA/RECEPCION'
      this.ServicioForm.value.servicio.data.cantidad = 1
      this.serviciosSeleccionados.push(this.ServicioForm.value.servicio)
    }

    this.dtTrigger.next();
  }

  modificarPosiciones(opcion: String, indice) {

    $('#example-datatable').DataTable().destroy();
  
    switch (opcion) {
      case "+":

      var actual  = this.serviciosSeleccionados[indice]
      var arriba = this.serviciosSeleccionados[indice-1]

      this.serviciosSeleccionados[indice] = arriba
      this.serviciosSeleccionados[indice-1] = actual

        break;

      case "-":

      var actual  = this.serviciosSeleccionados[indice]
      var abajo = this.serviciosSeleccionados[indice+1]

      this.serviciosSeleccionados[indice] = abajo
      this.serviciosSeleccionados[indice+1] = actual

        break;

      default:
        break;
    }

    this.dtTrigger.next()
  }

  guardarOrden() {

    if (!this.personaSeleccionada) {
      swal('Existió un error!', 'Debe seleccionar un cliente', 'error')

    } else if (!this.vehiculoSeleccionado) {
      swal('Existió un error!', 'Debe seleccionar un vehículo', 'error')
    } else if (this.serviciosSeleccionados.length <= 0) {
      swal('Existió un error!', 'Debe seleccionar al menos un servicio', 'error')
    } else {
      if (this.id == 'nuevo') {

        swal({
          title: 'Está seguro?',
          text: "Está seguro que desea guardar la Orden de Trabajo",
          type: 'question',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, guardar!'
        }).then((result) => {
          if (result.value) {
            var vehiculo = {
              placa: this.vehiculoSeleccionado.data.placa,
              marca: this.vehiculoSeleccionado.data.marca,
              modelo: this.vehiculoSeleccionado.data.modelo,
              color: this.vehiculoSeleccionado.data.color,
              numeroMotor: this.vehiculoSeleccionado.data.numeroMotor,
              numeroChasis: this.vehiculoSeleccionado.data.numeroChasis
            }

            var cliente = {
              cedula: this.personaSeleccionada.data.cedula,
              nombre: this.personaSeleccionada.data.nombre,
              direccion: this.personaSeleccionada.data.direccion,
              telefono: this.personaSeleccionada.data.telefono,
              correo: this.personaSeleccionada.data.correo
            }

            var servicios = []

            this.serviciosSeleccionados.forEach(servicio => {
              if (!servicio.data.operador) {
                servicio.data.operador = { id: '', data: {} }
              }
              servicios.push({ cantidad: servicio.data.cantidad, operador: servicio.data.operador, codigo: servicio.data.codigo, estado: servicio.data.estado, descripcion: servicio.data.descripcion, detalle: servicio.data.detalle, tiempoEstandar: servicio.data.tiempoEstandar })
            });


            var orden = {
              numero: this.numeroOrden,
              cliente: cliente,
              vehiculo: vehiculo,
              servicios: servicios,
              fecha: new Date()
            }
            const id = this.ordenService.crearOrden(orden, servicios)

            this.reiniciar()
            swal(
              'Listo!',
              'Orden de Trabajo creada exitosamente.',
              'success'
            )

            this.router.navigate(['/orden/informacionorden/' + id]);





          }
        })



      } else {


        swal({
          title: 'Está seguro?',
          text: "Está seguro que desea modificar la Orden de Trabajo",
          type: 'question',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, modificar!'
        }).then((result) => {
          if (result.value) {
            var vehiculo = {
              placa: this.vehiculoSeleccionado.data.placa,
              marca: this.vehiculoSeleccionado.data.marca,
              modelo: this.vehiculoSeleccionado.data.modelo,
              color: this.vehiculoSeleccionado.data.color,
              numeroMotor: this.vehiculoSeleccionado.data.numeroMotor,
              numeroChasis: this.vehiculoSeleccionado.data.numeroChasis
            }

            var cliente = {
              cedula: this.personaSeleccionada.data.cedula,
              nombre: this.personaSeleccionada.data.nombre,
              direccion: this.personaSeleccionada.data.direccion,
              telefono: this.personaSeleccionada.data.telefono,
              correo: this.personaSeleccionada.data.correo
            }

            var servicios = []

            console.log(this.serviciosSeleccionados)

            this.serviciosSeleccionados.forEach(servicio => {
              if (!servicio.data.operador) {
                servicio.data.operador = { id: '', data: {} }
              }
              servicios.push(servicio.data)
            });


            var orden = {
              numero: this.numeroOrden,
              cliente: cliente,
              vehiculo: vehiculo,
              servicios: servicios,
              fecha: new Date()
            }
            this.ordenService.modificarOrden(this.id, orden)

            this.reiniciar()

            swal(
              'Listo!',
              'Orden de Trabajo modificada exitosamente.',
              'success'
            )

            this.router.navigate(['/orden/informacionorden/' + this.id]);




          }
        })


      }

    }




  }

  reiniciar() {
    this.personaSeleccionada = null
    this.vehiculoSeleccionado = null
    this.serviciosSeleccionados = []

    this.ClienteForm = this.fb.group({
      persona: [{}, Validators.required]
    })



    this.VehiculoForm = this.fb.group({
      vehiculo: [{}, Validators.required]
    })
  }

  eliminarServicio(indice): void {

    

    swal({
      title: 'Esta seguro?',
      text: "Está seguro que desea eliminar el servicio seleccionado",
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        $('#example-datatable').DataTable().destroy();
        this.serviciosSeleccionados.splice(indice, 1)
        swal(
          'Listo!',
          'Servicio eliminado correctamente',
          'success'
        )
        this.dtTrigger.next()
      }
    })




  }

  seleccionarVehiculo() {
    this.vehiculoSeleccionado = this.VehiculoForm.value.vehiculo
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

    });
  }

}
