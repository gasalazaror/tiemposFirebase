import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { VehiculoService } from '../../../servicios/vehiculo/vehiculo.service';
import { Observable } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';



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

}
