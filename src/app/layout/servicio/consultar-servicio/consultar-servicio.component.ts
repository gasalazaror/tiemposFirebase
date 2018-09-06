import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { ServicioService } from '../../../servicios/servicio/servicio.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import swal from 'sweetalert2'


@Component({
  selector: 'app-consultar-servicio',
  templateUrl: './consultar-servicio.component.html',
  styleUrls: ['./consultar-servicio.component.scss'],
  animations: [routerTransition()]
})
export class ConsultarServicioComponent implements OnInit {
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

  servicios: any[]=[];

  constructor(private servicioService: ServicioService) {
    this.obtenerServicios()
  }

  ngOnInit() {

  }

  obtenerServicios() {

    this.servicioService.obtenerServicios()
    .subscribe(res => {
      $('#example-datatable').DataTable().destroy();
      this.servicios = res
      this.dtTrigger.next();
    })
  }

  eliminarServicio(servicio) {


    swal({
      title: 'Está seguro?',
      text: "¿Está seguro que desea eliminar el servicio: "+servicio.data.descripcion+"?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {

        
    this.servicioService.eliminarServicio(servicio).then(res=>{

      swal(
        'Eliminado!',
        'El registro ha sido eliminado.',
        'success'
      )
    })
       
      }
    })

  }

}
