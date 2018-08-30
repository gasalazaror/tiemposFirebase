import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PersonaService } from '../../../servicios/persona.service';
import { Observable } from 'rxjs';
import { VehiculoService } from '../../../servicios/vehiculo/vehiculo.service';
import { ActivatedRoute } from '@angular/router';
import swal from'sweetalert2';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.scss'],
  animations: [routerTransition()]
})
export class CrearVehiculoComponent implements OnInit {
  personas: Observable<any[]>;
  vehiculo: Observable<any>;
  id: any
  vehiculoGuardado: Boolean = false

  vehiculoForm = this.fb.group({
    placa: ['', Validators.required],
    marca: ['', Validators.required],
    modelo: ['', Validators.required],
    color: [''],
    numeroMotor: ['', Validators.required],
    numeroChasis: [''],
    anioFabricacion: ['', Validators.required],
    dueno: [{}, Validators.required]
  })
  constructor
    (
    private fb: FormBuilder,
    private personaService: PersonaService,
    private vehiculoService: VehiculoService,
    private route: ActivatedRoute,
  ) {

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != 'nuevo' && this.id != null) {
      this.vehiculo = this.vehiculoService.obtenerUnVehiculo(this.id);
      this.vehiculo.subscribe(vehiculo => {
        this.vehiculoForm = this.fb.group({
          placa: [vehiculo.placa, Validators.required],
          marca: [vehiculo.marca, Validators.required],
          modelo: [vehiculo.modelo, Validators.required],
          color: [vehiculo.color],
          numeroMotor: [vehiculo.numeroMotor, Validators.required],
          numeroChasis: [vehiculo.numeroChasis],
          anioFabricacion: [vehiculo.anioFabricacion, Validators.required],
          dueno: [vehiculo.dueno, Validators.required],
        })

      })
    }

    this.obtenerPersonas()
  }
  ngOnInit() {
  }
  guardarVehiculo() {





    if (this.vehiculoForm.value.placa == '') {
      swal( 'Existió un error','ID/Placa es requerido', 'error');

    } else if (this.vehiculoForm.value.marca == '') {
      swal( 'Existió un error','La marca es requerida', 'error');
   
    } else if (this.vehiculoForm.value.modelo == '') {
      swal( 'Existió un error','El modelo es requerido', 'error');

    } else if (this.vehiculoForm.value.numeroMotor == '') {
      swal( 'Existió un error','El número de motor es requerido', 'error');

    } else if (this.vehiculoForm.value.anioFabricacion == '') {
      swal( 'Existió un error','El año de fabricación es requerido', 'error');
     
    } else if (this.vehiculoForm.value.dueno == {}) {
      swal( 'Existió un error','El dueño es requerido', 'error');
 
    } else {


      if (this.id == 'nuevo' || this.id == null) {
        this.vehiculoService.crearVehiculo(this.vehiculoForm.value)
          .then(vehiculo => {
            swal( 'Listo!','Vehículo guardado exitosamente', 'success');
            this.vehiculoForm = this.fb.group({
              placa: ['', Validators.required],
              marca: ['', Validators.required],
              modelo: ['', Validators.required],
              color: [''],
              numeroMotor: ['', Validators.required],
              numeroChasis: [''],
              anioFabricacion: ['', Validators.required],
              dueno: [{}, Validators.required]
            })
          }, error => {
        
          })
      } else {
        this.vehiculoService.modificarVehiculo(this.id, this.vehiculoForm.value).then(res => {
          swal( 'Listo!','Vehículo modificado exitosamente', 'success');
        }, error => {
          swal( 'Existió un error','Existió un error al guardar el vehículo', 'error');
        })
      }

    }













  }
  obtenerPersonas() {
    this.personas = this.personaService.obtenerClientes()
    this.personas.subscribe(res => {
    })
  }
}
