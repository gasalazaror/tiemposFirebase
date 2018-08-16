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
    this.personas = this.personaService.obtenerPersonas()
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

    var confirmacion = confirm("¿Está seguro que desea guardar la orden")

    if (confirmacion) {
      this.VehiculoForm = this.fb.group({
        vehiculo: [{}, Validators.required]
      })

      this.VehiculoForm.value.vehiculo



     
      var orden = {
        cliente: this.ClienteForm.value.persona.data,
        vehiculo: this.vehiculoSeleccionado,
        servicios: this.serviciosSeleccionados
      }
      this.ordenService.crearOrden(orden)
    }



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
