import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PersonaService } from '../../../servicios/persona.service';
import { Observable } from 'rxjs';
import { VehiculoService } from '../../../servicios/vehiculo/vehiculo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.scss'],
  animations: [routerTransition()]
})
export class CrearVehiculoComponent implements OnInit {
  personas: Observable<any[]>;
  vehiculo: Observable<any>;
  id:any

  vehiculoForm = this.fb.group({
    placa: ['', Validators.required],
    marca: ['', Validators.required],
    modelo: ['', Validators.required],
    color: ['', Validators.required],
    numeroMotor: ['', Validators.required],
    numeroChasis: ['', Validators.required],
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

    if (this.id != 'nuevo') {
      this.vehiculo = this.vehiculoService.obtenerUnVehiculo(this.id);
      this.vehiculo.subscribe(vehiculo=>{
        this.vehiculoForm = this.fb.group({
          placa: [vehiculo.placa, Validators.required],
          marca: [vehiculo.marca, Validators.required],
          modelo: [vehiculo.modelo, Validators.required],
          color: [vehiculo.color, Validators.required],
          numeroMotor: [vehiculo.numeroMotor, Validators.required],
          numeroChasis: [vehiculo.numeroChasis, Validators.required],
          anioFabricacion: [vehiculo.anioFabricacion, Validators.required],
          dueno: [vehiculo.dueno, Validators.required],
        })
        
      })
    


    }

    this.obtenerPersonas()
  }
  ngOnInit() {
  }
  guardarVehiculo(){
    if (this.id=='nuevo') {
      this.vehiculoService.crearVehiculo(this.vehiculoForm.value).then(vehiculo=>{this.vehiculoForm.reset()}, error=>{console.log(error)})
    } else {
      this.vehiculoService.modificarVehiculo(this.id, this.vehiculoForm.value).then(res=>{
        alert('Vehículo modificado correctamente')
      }, error=>{
        alert('Existió un error al modificar el vehículo')
      })
    }
  
  }
  obtenerPersonas() {
    this.personas =this.personaService.obtenerClientes()
   this.personas.subscribe(res=>{
   })
  }
}
