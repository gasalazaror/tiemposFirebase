import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PersonaService } from '../../../servicios/persona.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.scss'],
  animations: [routerTransition()]
})
export class CrearPersonaComponent implements OnInit {


  
  
  personaForm = this.fb.group({
    estado: ['Activo', Validators.required],
    tipo: ['Natural', Validators.required],
    cedula: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
    cliente: [false],
    empleado: [false]
  })

  constructor(private fb: FormBuilder, private personaService: PersonaService) { 


 

  }

  ngOnInit() {
  }

  guardarPersona(){
    console.log(this.personaForm.value)
    this.personaService.crearPersona(this.personaForm.value).then(persona=>{
      this.personaForm.reset()
    }, error=>{
      console.log('existió un error')
    })

  
  }

  

}
