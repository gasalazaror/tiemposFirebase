import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { OrdenService } from '../../../servicios/orden/orden.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import swal from 'sweetalert2'
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-consultar-orden',
  templateUrl: './consultar-orden.component.html',
  styleUrls: ['./consultar-orden.component.scss'],
  animations: [routerTransition()]
})
export class ConsultarOrdenComponent implements OnInit {
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


  constructor(private ordenService: OrdenService, private aFaut: AngularFireAuth) {
    
   }

  ngOnInit() {
    this.obtenerOrdenes()
  }

  obtenerOrdenes() {
    
    this.ordenes =this.ordenService.obtenerOrdenes();

    this.ordenes.subscribe(res=>{
      console.log(res)
      
      $('#example-datatable').DataTable().destroy();
      this.dtTrigger.next();
    })
  
  }

  eliminarOrden(orden){
    swal({
      title: 'Está seguro?',
      text: "Está seguro que desea eliminar la orden seleccionada",
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {

        this.ordenService.eliminarOrden(orden.id).then(res=>{
        
          swal(
            'Listo!',
            'Orden de trabajo eliminada correctamente.',
            'success'
          )
        })
       
       
      }
    })


 
  }

}
