import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PersonaService } from '../../../servicios/persona.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.scss'],
  animations: [routerTransition()]
})
export class CrearPersonaComponent implements OnInit {


  id: any
  persona: Observable<any>;
  personaGuardada: boolean= false;
  existeCedula: boolean= false;
  existeCorreo: boolean= false;
  errorCedula:any=''

  personaForm = this.fb.group({
    estado: ['Activo', Validators.required],
    tipo: ['Natural', Validators.required],
    cedula: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
    cliente: [false],
    empleado: [false],
    roles: {Administrador: false, Asesor: false, Operador: false}
  })

  constructor(private fb: FormBuilder, private personaService: PersonaService, private route: ActivatedRoute, ) {

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != 'nuevo' && this.id!=null) {
      this.persona = this.personaService.obtenerUnaPersona(this.id);

      this.persona.subscribe(persona => {
        this.personaForm = this.fb.group({
          estado: ['Activo', Validators.required],
          tipo: ['Natural', Validators.required],
          cedula: [persona.cedula, [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
          nombre: [persona.nombre, [Validators.required]],
          direccion: [persona.direccion, [Validators.required]],
          telefono: [persona.telefono, [Validators.required]],
          correo: [persona.correo, [Validators.required, Validators.email]],
          cliente: [persona.cliente],
          empleado: [persona.empleado]
        })
      })


    }




  }

  ngOnInit() {
  }

  guardarPersona() {

    this.comprobarCedula()
    this.comprobarCorreo()
    // if (this.id == 'nuevo' ||  this.id==null) {
    //   this.personaService.crearPersona(this.personaForm.value).then(persona => {
 
    //     this.personaGuardada = true
    //     this.personaForm.reset()
    //   }, error => {
    //     alert('Existió un error al guardar la persona')
    //   })
    // } else {
    //   this.personaService.modificarPersona(this.id, this.personaForm.value).then(persona => {
    //     alert('Persona modificada correctamente')
    //   }, error => {
    //     alert('Existió un error al modificar la persona')
    //   })
    // }
  }


  comprobarCedula(){

    this.personaService.comprobar('cedula',this.personaForm.value.cedula)
    .subscribe(res=>{
      console.log(res)
      if(res.length>0){
        this.errorCedula = 'Ya existe una persona con la Cédula/RUC ingresado'
        this.existeCedula=true

      }else{
       this.errorCedula = ''
        this.existeCedula=false
      }
    }, error=>{
      console.log(error)
    })
   
  
  }



  comprobarCorreo(){

    this.personaService.comprobar('correo',this.personaForm.value.correo)
    .subscribe(res=>{
      if(res.length>0){
       // this.error = 'Ya existe una persona con el correo ingresado'
        this.existeCorreo=true

      }else{
        if (!this.existeCedula && this.existeCorreo) {
         // this.error = ''
        }
        this.existeCorreo=false
      }
    }, error=>{
      console.log(error)
    })
   
  
  }



  
}
