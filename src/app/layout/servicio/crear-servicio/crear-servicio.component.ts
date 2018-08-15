import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../../servicios/servicio/servicio.service';
import { Observable } from 'rxjs';
import { routerTransition } from '../../../router.animations';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

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
    detalle: ['', Validators.required],
  })

  constructor(public servicioService: ServicioService, private fb: FormBuilder) { }

  ngOnInit() {
    this.obtenerCategorias()
  }

  seleccionarCategoria(categoria) {
    this.categoriaSeleccionada = categoria
    console.log(this.categoriaSeleccionada)
  }


  agregarCategoria() {
    var categoria = prompt('Ingrese el nombre de la categoría', '');
    if (categoria) {
      this.servicioService.crearCategoria({ nombre: categoria.toUpperCase().trim() }).then(categoria => {
      },
        error => { })
    } else {
    }
  }

  obtenerCategorias() {
    this.categorias = this.servicioService.obtenerCategorias()
  }

  guardarServicio() {
    this.servicioService.crearServicio(this.categoriaSeleccionada.id, this.servicioForm.value)
      .then(servicio => {
        console.log(servicio)
        this.servicioForm.reset()
      }, error => {

      })
  }



}
