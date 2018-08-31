import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../../servicios/servicio/servicio.service';
import { Observable } from 'rxjs';
import { routerTransition } from '../../../router.animations';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import swal from 'sweetalert2'

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.scss'],
  animations: [routerTransition()]
})
export class CrearServicioComponent implements OnInit {

  categorias: Observable<any[]>;

  categoriaSeleccionada: any

  servicioForm = this.fb.group({
    codigo: ['', Validators.required],
    descripcion: ['', Validators.required],
    tiempoEstandar: ['', Validators.required],
    detalle: [''],
  })

  constructor(public servicioService: ServicioService, private fb: FormBuilder) { }

  ngOnInit() {
    this.obtenerCategorias()
  }

  seleccionarCategoria(categoria) {
    this.categoriaSeleccionada = categoria

  }


  agregarCategoria() {

    swal({
      title: 'Ingrese el nombre de la categoría',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'on'
      },
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,

      allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {

      if (result.value) {

        var categoria = result.value.toUpperCase()
        swal({
          title: 'Está seguro?',
          text: "Está seguro que deseas guardar la categoría: " + result.value.toUpperCase(),
          type: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Si!'
        }).then((result) => {
          if (result.value) {

            this.servicioService.obtenerUnaCategoria(categoria).subscribe(res => {
              if (res.length > 0) {
                swal('Existió un error!', 'Ya existe la categoría ingresada', 'error');
              } else {
                swal('Listo!', 'Categoría guardada exitosamente', 'success');
                this.servicioService.crearCategoria({ nombre: categoria }).then(res => {
                 
                 
                })

              }
            })


          }
        })
      }
    })




  }

  obtenerCategorias() {
    this.categorias = this.servicioService.obtenerCategorias()
  }

  guardarServicio1() {

  }

  guardarServicio() {

    if (this.servicioForm.value.codigo == '') {
      swal('Existió un error', 'El código es obligatorio', 'error');
    } else if (this.servicioForm.value.descripcion == '') {
      swal('Existió un error', 'El servicio es obligatorio', 'error');
    }
    else if (this.servicioForm.value.tiempoEstandar <= 0) {
      swal('Existió un error', 'El tiempo estándar no puede ser negativo', 'error');
    } else {
      this.servicioService.validarServicio('codigo', this.servicioForm.value.codigo).subscribe(res => {
        if (res.length > 0) {
          swal('Existió un error', 'El código ingresado ya existe en la base de datos', 'error');
        } else {
          this.servicioService.validarServicio('descripcion', this.servicioForm.value.descripcion).subscribe(res => {
            if (res.length > 0) {
              swal('Existió un error', 'El servicio ingresado ya existe en la base de datos', 'error');
            } else {
              this.servicioService.crearServicio(this.categoriaSeleccionada.id, this.servicioForm.value)
                .then(servicio => {
                  swal( 'Listo!','Servicio guardado exitosamente', 'success');
                  this.servicioForm = this.fb.group({
                    codigo: ['', Validators.required],
                    descripcion: ['', Validators.required],
                    tiempoEstandar: ['', Validators.required],
                    detalle: [''],
                  })
                }, error => {

                  

                })
            }
          })
        }
      })
    }



  }



}
