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
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  servicios: Observable<any[]>;

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.obtenerServicios()
  }

  obtenerServicios() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      autoWidth: true,

    };
    this.servicios = this.servicioService.obtenerServicios()

    this.servicios.subscribe(res => {
      this.dtTrigger.next();
    })
  }

}
