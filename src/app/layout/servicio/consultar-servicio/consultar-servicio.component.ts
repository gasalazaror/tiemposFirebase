import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { ServicioService } from '../../../servicios/servicio/servicio.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';


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

  };
  dtTrigger: Subject<any> = new Subject();

  servicios: Observable<any[]>;

  constructor(private servicioService: ServicioService) {
    this.obtenerServicios()
   }

  ngOnInit() {

  }

  obtenerServicios() {
  
    this.servicios = this.servicioService.obtenerServicios()

    this.servicios.subscribe(res => {
      $('#example-datatable').DataTable().destroy();
      this.dtTrigger.next();
    })
  }

}
