import { Component, OnInit, forwardRef } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { PersonaService } from '../../../servicios/persona.service';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehiculoService } from '../../../servicios/vehiculo/vehiculo.service';
import { ServicioService } from '../../../servicios/servicio/servicio.service';
import { OrdenService } from '../../../servicios/orden/orden.service';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.scss'],
  animations: [routerTransition()]
})
export class CrearOrdenComponent implements OnInit {

  persona: any;
  personas: Observable<any[]>;
  personaSeleccionada: any
  vehiculoSeleccionado: any
  vehiculoSeleccionadoaux: any
  closeResult: string;
  vehiculos: Observable<any[]>;
  servicios: Observable<any[]>;
  serviciosSeleccionados: any[];


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
    private vehiculoService: VehiculoService,
    private servicioService: ServicioService,
    private ordenService: OrdenService

  ) {

    this.vehiculos = this.vehiculoService.obtenerVehiculos()
    this.serviciosSeleccionados = []

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
    this.VehiculoForm = this.fb.group({
      vehiculo: [{}, Validators.required]
    })
    this.vehiculos = this.personaService.obtenerVehiculos(this.personaSeleccionada.id)
  }

  seleccionarServicio() {
    if (this.ServicioForm.value.servicio.data) {
      this.serviciosSeleccionados.push(this.ServicioForm.value.servicio)
    }
  }

  guardarOrden() {
    var confirmacion = confirm("¿Está seguro que desea guardar la orden");
    if (confirmacion) {
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
        telefono: this.personaSeleccionada.data.direccion,
        correo: this.personaSeleccionada.data.correo
      }

      var servicios = []

      this.serviciosSeleccionados.forEach(servicio => {
        servicios.push({ codigo: servicio.data.codigo, descripcion: servicio.data.descripcion, detalle: servicio.data.detalle, tiempoEstandar: servicio.data.tiempoEstandar, estado: 'CITA/RECEPCION' })
      });
      

      var orden = {
        cliente: cliente,
        vehiculo: vehiculo,
        servicios: servicios,
        fecha: new Date()
      }
      this.ordenService.crearOrden(orden, servicios)

      this.reiniciar()

    } 
  }

  reiniciar(){
    this.personaSeleccionada=null
    this.vehiculoSeleccionado = null
    this.serviciosSeleccionados=[]

    this.ClienteForm = this.fb.group({
      persona: [{}, Validators.required]
    })
  
    
  
    this.VehiculoForm = this.fb.group({
      vehiculo: [{}, Validators.required]
    })
  }

  eliminarServicio(indice): void {
    this.serviciosSeleccionados.splice(indice, 1)
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
