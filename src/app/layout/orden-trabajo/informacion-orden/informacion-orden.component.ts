import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { OrdenService } from '../../../servicios/orden/orden.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PersonaService } from '../../../servicios/persona.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-informacion-orden',
  templateUrl: './informacion-orden.component.html',
  styleUrls: ['./informacion-orden.component.scss'],
  animations: [routerTransition()]

})
export class InformacionOrdenComponent implements OnInit {

  id: any
  orden: Observable<any>;
  servicios: any;

  personas: Observable<any[]>;

  PersonaForm = this.fb.group({
    persona: [{}, Validators.required]
  })

  constructor(
    private route: ActivatedRoute,
    private ordenService: OrdenService,
    private fb: FormBuilder,
    private personaService: PersonaService
  ) {
    this.servicios = []
    this.id = this.route.snapshot.paramMap.get('id');
    this.orden = this.ordenService.obtenerUnaOrden(this.id);
    this.orden.subscribe(res => {
      this.servicios = res.servicios
      console.log(this.servicios)
    })
    this.personas = this.personaService.obtenerUsuarios();


  }

  seleccionarPersona(servicio, index) {
    console.log(servicio.operador)

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

          this.servicios[index].operador = servicio.operador
          this.servicios[index].estado = 'EN ESPERA DE PRODUCCIÓN'
          this.ordenService.modificarServicio(this.id, { servicios: this.servicios, estado: 'EN ESPERA DE PRODUCCIÓN' })
          .then(res=>{
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

  ngOnInit() {

  }

}




