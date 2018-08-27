import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { OrdenService } from '../../../servicios/orden/orden.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

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

  };;
  dtTrigger: Subject<any> = new Subject();

  ordenes: Observable<any[]>;


  constructor(private ordenService: OrdenService) { }

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
