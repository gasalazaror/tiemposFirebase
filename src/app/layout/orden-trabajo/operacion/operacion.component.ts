import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable, Subject } from 'rxjs';
import { OrdenService } from '../../../servicios/orden/orden.service';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.scss'],
  animations: [routerTransition()]
})
export class OperacionComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings= this.dtOptions = {
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

  };;
  dtTrigger: Subject<any> = new Subject();

  ordenes: Observable<any[]>;


  constructor(private ordenService: OrdenService) {

  }

  ngOnInit() {
    this.obtenerOrdenes()
  }

  obtenerOrdenes() {
    
    this.ordenes =this.ordenService.obtenerOrdenes();

    this.ordenes.subscribe(res=>{
      $('#example-datatable').DataTable().destroy();
      this.dtTrigger.next();
    })
  
  }

}
