import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { OrdenService } from '../../../servicios/orden/orden.service';
import { PersonaService } from '../../../servicios/persona.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss'],
  animations: [routerTransition()]
})
export class ConfiguracionComponent implements OnInit {

  numeroInicial: number = 1;

  constructor(private ordenService: OrdenService, private personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.obtenerEmpresa().valueChanges().subscribe(empresa => {
      this.numeroInicial = empresa.otInicio
    })
  }

  guardarNumeracion(){
    if (this.numeroInicial == null) {
      swal('Existió un error', 'El número inicial no puede estar vacio', 'error')
    } else if(this.numeroInicial<=0){
      swal('Existió un error', 'El número inicial no puede ser 0 o menor a 0', 'error')
    }else if(!Number.isInteger(this.numeroInicial)){
      swal('Existió un error', 'El número inicial no puede ser decimal', 'error')

    }else{
      swal({
        title: 'Está seguro?',
        text: "Desea modificar el número inicial de las Órdenes de Trabajo?",
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, modificar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {

          this.personaService.editarNumeracionInicial(this.numeroInicial).then(res=>{
            swal(
              'Listo!',
              'Número inicial modificado correctamente.',
              'success'
            )
          }, error=>{

          })
          
        }
      })
    }
  }

}
