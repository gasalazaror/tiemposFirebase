import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { ServicioService } from '../../../servicios/servicio/servicio.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import swal from 'sweetalert2'

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
  animations: [routerTransition()]
})
export class CategoriaComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    pageLength: 5,
    autoWidth: true,
    language: {
      processing: "Procesando...",
      search: "Buscar:",
      lengthMenu: "Mostrar _MENU_ elementos",
      info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
      infoEmpty: "Mostrando ningún elemento.",
      infoFiltered: "(filtrado _MAX_ elementos total)",
      infoPostFix: "",
      loadingRecords: "Cargando registros...",
      zeroRecords: "No se encontraron registros",
      emptyTable: "No hay datos disponibles en la tabla",
      paginate: {
        first: "Primero",
        previous: "Anterior",
        next: "Siguiente",
        last: "Último"
      },
      aria: {
        sortAscending: ": Activar para ordenar la tabla en orden ascendente",
        sortDescending: ": Activar para ordenar la tabla en orden descendente"
      }
    }

  };
  dtTrigger: Subject<any> = new Subject();

  categorias: any[] = [];

  constructor(private servicioService: ServicioService) {
    this.obtenerServicios()
  }

  ngOnInit() {
  }

  obtenerServicios() {

    this.servicioService.obtenerCategorias()
      .subscribe(res => {
        $('#example-datatable').DataTable().destroy();
        this.categorias = res
        this.dtTrigger.next();
      })
  }

  eliminarCategoria(categoria) {
    swal({
      title: 'Está seguro?',
      text: "Desea eliminar la categoría: " + categoria.data.nombre,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {

        this.servicioService.eliminarCategoria(categoria.id);
        swal(
          'Listo!',
          'La categoría ha sido eliminada.',
          'success'
        )
      }
    })
  }

  modificarCategoria(categoria) {
    swal({
      title: 'Ingrese el nombre de la categoría',
      input: 'text',
      inputValue: categoria.data.nombre,
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

        var categoriaInput = result.value
        swal({
          title: 'Está seguro?',
          text: "Está seguro que deseas guardar la categoría: " + result.value,
          type: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Si!'
        }).then((result) => {
          if (result.value) {

            this.servicioService.modificarCategoria(categoria.id, { nombre: categoriaInput }).then(res => {

              swal('Listo!', 'Categoría guardada exitosamente', 'success');
            })

          }
        })
      }
    })
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

        var categoria = result.value
        swal({
          title: 'Está seguro?',
          text: "Está seguro que deseas guardar la categoría: " + result.value,
          type: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Si!'
        }).then((result) => {
          if (result.value) {


            this.servicioService.crearCategoria({ nombre: categoria }).then(res => {

              swal('Listo!', 'Categoría guardada exitosamente', 'success');
            })


          }
        })
      }
    })
  }

}
