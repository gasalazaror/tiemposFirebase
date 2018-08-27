import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { PersonaService } from '../../../servicios/persona.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

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
    console.log(persona)
    var confirmacion = confirm("¿Está seguro que desea eliminar a la persona: "+persona.data.nombre)

    if (confirmacion) {
      this.personaService.eliminarPersona(persona.id).then(persona=>{
        alert('Persona eliminada correctamente')
      },err=>{
        alert('Existió un error al eliminar a la persona')
      })
    } else {
      
    }
  }
}
