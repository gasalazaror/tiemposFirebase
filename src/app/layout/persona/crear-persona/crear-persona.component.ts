import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PersonaService } from '../../../servicios/persona.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import swal from'sweetalert2';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.scss'],
  animations: [routerTransition()]
})
export class CrearPersonaComponent implements OnInit {


  id: any
  persona: Observable<any>;
  categoria: Observable<any>;

  existePersona: boolean = false

  personaForm = this.fb.group({
    estado: ['Activo', Validators.required],
    tipo: ['Natural', Validators.required],
    cedula: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    direccion: ['', []],
    telefono: ['', []],
    correo: ['', [Validators.required, Validators.email]],
    cliente: [false],
    empleado: [false],
    roles: { Administrador: false, Asesor: false, Operador: false }
  })

  constructor(private fb: FormBuilder, private personaService: PersonaService, private route: ActivatedRoute, ) {

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != 'nuevo' && this.id != null) {


      this.persona = this.personaService.obtenerUnaPersona(this.id);
      this.persona.subscribe(persona => {
        

        if (persona != null) {

          this.existePersona = true
          this.personaForm = this.fb.group({
            estado: [persona.estado, Validators.required],
            tipo: [persona.tipo, Validators.required],
            cedula: [persona.cedula, [Validators.required]],
            nombre: [persona.nombre, [Validators.required]],
            direccion: [persona.direccion, []],
            telefono: [persona.telefono, []],
            correo: [persona.correo, [Validators.required, Validators.email]],
            cliente: [persona.cliente],
            empleado: [persona.empleado]
          })
        } else {
          this.existePersona = false

        }

      })


    } else {
      this.existePersona = true
    }




  }

  ngOnInit() {
  }

  guardarPersona() {

    if (this.id == 'nuevo' || this.id == null) {

      if (this.personaForm.value.cedula.trim() == '') {
      
        swal( 'Existió un error','El número de Cédula/RUC es obligatorio', 'error');
    
      } else {
     
        this.personaForm.value.cedula = this.personaForm.value.cedula.trim()
        if (this.personaForm.value.nombre.trim() == '') {
          swal( 'Existió un error','El nombre es obligatorio', 'error');

        } else {
      
          this.personaForm.value.nombre = this.personaForm.value.nombre.trim()
          if (this.personaForm.value.correo.trim() == '') {
            swal( 'Existió un error','El correo es obligatorio', 'error');
          } else {
     
            this.personaForm.value.correo = this.personaForm.value.correo.trim()
            if (!this.validarEmail(this.personaForm.value.correo.trim())) {
              swal( 'Existió un error','El correo ingresado no tiene el formato correcto', 'error');
            } else {
              
              if (!this.personaForm.value.cliente && !this.personaForm.value.empleado) {
                swal( 'Existió un error','Debe seleccionar al menos un rol', 'error')
              } else {
                this.personaService.crearPersona(this.personaForm.value).then(res=>{
                  swal( 'Listo!','Persona guardada exitosamente', 'success');
                  this.personaForm = this.fb.group({
                    estado: ['Activo', Validators.required],
                    tipo: ['Natural', Validators.required],
                    cedula: ['', [Validators.required]],
                    nombre: ['', [Validators.required]],
                    direccion: ['', []],
                    telefono: ['', []],
                    correo: ['', [Validators.required, Validators.email]],
                    cliente: [false],
                    empleado: [false],
                    roles: { Administrador: false, Asesor: false, Operador: false }
                  })
                })
                
              }
             
            }
          }
        }

      }
    } else {
      if (this.personaForm.value.cedula.trim() == '') {
        swal( 'Existió un error','El número de Cédula/RUC es obligatorio', 'error');
      } else {
  
        this.personaForm.value.cedula = this.personaForm.value.cedula.trim()
        if (this.personaForm.value.nombre.trim() == '') {
          swal( 'Existió un error','El nombre es obligatorio', 'error');
         
        } else {
        
          this.personaForm.value.nombre = this.personaForm.value.nombre.trim()
          if (this.personaForm.value.correo.trim() == '') {
            swal( 'Existió un error','El correo es obligatorio', 'error');
         
          } else {
        
            this.personaForm.value.correo = this.personaForm.value.correo.trim()
            if (!this.validarEmail(this.personaForm.value.correo.trim())) {
  
              swal( 'Existió un error','El correo ingresado no tiene el formato correcto', 'error');
        
            } else {

              if(!this.personaForm.value.cliente && !this.personaForm.value.empleado){
                swal( 'Existió un error','Debe seleccionar al menos un rol', 'error')
              }else{
                this.personaService.modificarPersona(this.id, this.personaForm.value).then(persona => {
            
                  swal( 'Listo!','Persona modificada exitosamente', 'success');
                }, error => {
                  swal( 'Existió un error','Existió un error al modificar la persona', 'error');
                })
              }
         
        
              
            }
          }
        }
      }
    }

  }

  validarEmail(email) {
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return regex.test(email)

  }









}
