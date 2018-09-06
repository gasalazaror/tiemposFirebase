import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../../servicios/servicio/servicio.service';
import { Observable } from 'rxjs';
import { routerTransition } from '../../../router.animations';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import swal from 'sweetalert2'

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.scss'],
  animations: [routerTransition()]
})
export class CrearServicioComponent implements OnInit {
  id: any
  servicio: Observable<any>;
  categoria: Observable<any>;

  categorias: Observable<any[]>;
  categoriaSeleccionada: any
  servicioForm = this.fb.group({
    codigo: ['', Validators.required],
    descripcion: ['', Validators.required],
    tiempoEstandar: ['', Validators.required],
    detalle: [''],
  })
  constructor(
    public servicioService: ServicioService,
    private fb: FormBuilder,
    private route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != 'nuevo' && this.id != null) {
      this.servicio = this.servicioService.obtenerUnServicio(this.id);

      this.servicio.subscribe(servicio => {
        var path: String = servicio.categoria.path;
        var path2 = path.split('/')

        this.categoria = this.servicioService.obtenerCategoria(path2[1])

        this.categoria.subscribe(res => {
       
          this.categoriaSeleccionada = { id: path2[1], data: res }
        })



        console.log(servicio.categoria.path)
        this.servicioForm = this.fb.group({
          codigo: [servicio.codigo, Validators.required],
          descripcion: [servicio.descripcion, Validators.required],
          tiempoEstandar: [servicio.tiempoEstandar, Validators.required],
          detalle: [servicio.detalle, ''],
        })
      })
    }



  }
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


    if (this.id != 'nuevo' && this.id != null) {

      this.servicioService.modificarServicio(this.id,this.categoriaSeleccionada.id, this.servicioForm.value)
        .then(servicio => {
          swal('Listo!', 'Servicio modificado exitosamente', 'success');
        
        }, error => {



        })

    }else{
      if (this.servicioForm.value.codigo == '') {
        swal('Existió un error', 'El código es obligatorio', 'error');
      } else if (this.servicioForm.value.descripcion == '') {
        swal('Existió un error', 'El servicio es obligatorio', 'error');
      }
      else if (this.servicioForm.value.tiempoEstandar <= 0) {
        swal('Existió un error', 'El tiempo estándar no puede ser negativo o nulo', 'error');
      } else {
        this.servicioService.crearServicio(this.categoriaSeleccionada.id, this.servicioForm.value)
        .then(servicio => {
          swal('Listo!', 'Servicio guardado exitosamente', 'success');
          this.servicioForm = this.fb.group({
            codigo: ['', Validators.required],
            descripcion: ['', Validators.required],
            tiempoEstandar: ['', Validators.required],
            detalle: [''],
          })
        }, error => {



        })
      }
    }

    



  }



}
