import { Component, OnInit, ViewChild } from '@angular/core';
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
export class ConsultarPersonaComponent implements OnInit {
  @ViewChild(DataTableDirective)
  personas: Observable<any[]>;
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private personaService: PersonaService) {
  }

  ngOnInit() {
    this.obtenerPersonas()

  }

  obtenerPersonas() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      autoWidth: true,

    };
    this.personas = this.personaService.obtenerPersonas()
    this.personas.subscribe(res => {

      if (this.dtElement) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          // Destroy the table first
          dtInstance.destroy();
          // Call the dtTrigger to rerender again
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }


    })
  }

  rerender(): void {

  }

  llenarTabla() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
}
