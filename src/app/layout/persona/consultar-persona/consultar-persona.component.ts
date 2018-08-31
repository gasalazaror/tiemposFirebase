import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { PersonaService } from '../../../servicios/persona.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import swal from 'sweetalert2'

@Component({
  selector: 'app-consultar-persona',
  templateUrl: './consultar-persona.component.html',
  styleUrls: ['./consultar-persona.component.scss'],
  animations: [routerTransition()]
})
export class ConsultarPersonaComponent implements  OnInit {
  @ViewChild(DataTableDirective)
  personas: Observable<any[]>;
  personasq:any[]
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings =  {
    pagingType: 'full_numbers',
    pageLength: 5,
    autoWidth: true,
   responsive: true,
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

  constructor(private personaService: PersonaService) {
  }


  ngOnInit() {
   this.obtenerPersonas()

  }

  obtenerPersonas() {
 
    this.personas = this.personaService.obtenerPersonas()
    this.personas.subscribe(res => {
      $('#example-datatable').DataTable().destroy();
      this.dtTrigger.next();
    })
  }

  

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
  llenarTabla() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
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

        
    this.personaService.eliminarPersona(persona.id).then(res=>{

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
