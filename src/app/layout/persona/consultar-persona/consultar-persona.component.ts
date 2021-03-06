import { Component, OnInit,OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { PersonaService } from '../../../servicios/persona.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import swal from 'sweetalert2'
import { ReporteService } from '../../../servicios/reporte/reporte.service';

@Component({
  selector: 'app-consultar-persona',
  templateUrl: './consultar-persona.component.html',
  styleUrls: ['./consultar-persona.component.scss'],
  animations: [routerTransition()]
})
export class ConsultarPersonaComponent implements  OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    pageLength: 25,
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
  
  personas:any[] = [];

  observable: Observable<any[]>

  constructor(private personaService: PersonaService, private reporteService: ReporteService) {

 }


  ngOnInit() {
    this.personaService.obtenerPersonas()
    .subscribe((res: any[]) => {
      $('#example-datatable').DataTable().destroy();
      this.personas = res
      this.dtTrigger.next();
    })

  }

  ngOnDestroy(){

  }

  
  

 


 
  imprimirReporte(){
    this.reporteService.reporteDatos(this.personas, 'Personas')
    
  }

 


  eliminarPersona(persona) {
    swal({
      title: 'Está seguro?',
      text: "¿Está seguro que desea eliminar la persona: "+persona.data.nombre+"?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {

        
    this.personaService.eliminarPersona(persona.id)
    swal('Eliminado!','El registro ha sido eliminado.','success')}
    })

  }
}
