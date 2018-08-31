import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { VehiculoService } from '../../../servicios/vehiculo/vehiculo.service';
import { Observable } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import swal from 'sweetalert2'



@Component({
  selector: 'app-consultar-vehiculo',
  templateUrl: './consultar-vehiculo.component.html',
  styleUrls: ['./consultar-vehiculo.component.scss'],
  animations: [routerTransition()]
})
export class ConsultarVehiculoComponent implements OnInit {

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
  
  vehiculos: Observable<any[]>;

  constructor(private vehiculoService: VehiculoService) { 
    this.obtenerVehiculos()
  }

  ngOnInit() {
  }

  obtenerVehiculos() {
    this.vehiculos =this.vehiculoService.obtenerVehiculos();
    this.vehiculos.subscribe(res => {
      $('#example-datatable').DataTable().destroy();
      this.dtTrigger.next();
    })
  }


 

  eliminarVehiculo(vehiculo) {
    swal({
      title: 'Está seguro?',
      text: "¿Está seguro que desea eliminar el vehículo: "+vehiculo.data.placa+"?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
    this.vehiculoService.eliminarVehiculo(vehiculo.id).then(res=>{
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
