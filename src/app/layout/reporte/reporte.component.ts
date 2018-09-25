import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Observable } from 'rxjs';
import { OrdenService } from '../../servicios/orden/orden.service';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { PersonaService } from '../../servicios/persona.service';
import { ServicioService } from '../../servicios/servicio/servicio.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss'],
  animations: [routerTransition()]
})
export class ReporteComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  user: any = ''
  dtOptions: DataTables.Settings = this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 10,
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

  filtro: String = "1"
  fechaInicio: Date = new Date
  ordenes: Observable<any>
  ordenSeleccionada: any = ""
  tareas: any[] = []

  cita

  orden: any[] = []

   // Pie
   public pieChartLabels: string[] = [
    'Cita/Recepción',
    'En Producción',
    'En Espera',
    'En Pausa',
    'Por Facturar'
];
public pieChartData: number[] = [0, 0,0, 0];
public pieChartType: string = 'pie';


  operadores: Observable<any>
  servicios: Observable<any>
  filtroTiempo: any = { inicio: this.convertir(Date.now()), iniciohora: '00:00', fin: this.convertir(Date.now()), finhora: '23:59' }
  operaciones: Observable<any>


  constructor(private ordenService: OrdenService, private personaService: PersonaService, private servicioService: ServicioService) {
   // this.ordenes = ordenService.obtenerOrdenes();
   // this.operadores = personaService.obtenerUsuarios()
   // this.servicios = servicioService.obtenerServicios()

   this.dtTrigger.next()

  }

  convertir(fecha) {
    var local = new Date(fecha);
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  }

  public randomize(): void {
    
   
  
}

  ngOnInit() {

  }

  obtenerOrdenes() {

  }

  buscar() {
    switch (this.filtro) {
      case "1":
        this.buscarPorOrden()
        break;
      case "2":
        this.buscarPorOperador()
        break;
      case "3":
        this.buscarPorServicio()
        break;

      default:
        break;
    }
  }

  buscarPorOrden() {

    if (this.ordenSeleccionada != '') {
      this.buscarTareasPorOrden(this.ordenSeleccionada)

    } else {

      swal('Existió un error', 'Seleccione una Orden de Trabajo para continuar', 'error')
    }

  }

  buscarPorOperador() {
    console.log('operador')
  }

  buscarPorServicio() {
    console.log('servicio')
  }


  buscarOrdenes() {
    var fechiInicio = new Date(this.filtroTiempo.inicio + " 00:00")
    var fechaFin = new Date(this.filtroTiempo.fin + " 23:59")

    this.ordenService.obtenerOrdenesFecha(fechiInicio, fechaFin)
      .subscribe(ordenes => {
        $('#example-datatable').DataTable().destroy();
     
        this.tareas = []

     
    
       

        var porfacturar  = 0
        var cita = 0
        var produccion = 0
        var espera = 0
        var pausa = 0

        ordenes.forEach((orden:any) => {
    
          orden.data.servicios.forEach(servicio => {

          

            if (servicio.estado =='POR FACTURAR') {
              porfacturar++
            }

            if (servicio.estado =='EN PRODUCCIÓN') {
              produccion++
            }

            if (servicio.estado =='CITA/RECEPCION') {
              cita++
            }

            if(servicio.estado == 'EN ESPERA DE PRODUCCIÓN'){
              espera++
            }

            if(servicio.estado=='EN PRODUCCIÓN - PAUSADO'){
              pausa++
            }

          
           // clone[0].data = data;
          //  this.pieChartData = clone;
            
            servicio.orden = {id:orden.id,numero: orden.data.numero, cliente: orden.data.cliente, vehiculo: orden.data.vehiculo, fecha: orden.data.fecha}
            
            this.tareas.push(servicio)
     
            
          });
        });

        const data = [
          cita,produccion,espera,pausa,porfacturar
      ];
     
     
      this.pieChartData = data;

  
      this.dtTrigger.next();
      
      })
  }

  public chartClicked(e: any): void {
    console.log(e);
}




  buscarTareasPorOrden(idOrden) {
    this.ordenService.obtenerUnaOrden(idOrden)
      .subscribe((res: any) => {


        var totalTiempoEstandar = 0;
        var totalTiempoReal = 0;
        var finalizadas = 0;


        res.servicios.forEach(servicio => {

          if (servicio.estado == 'POR FACTURAR') {
            finalizadas++
            totalTiempoReal += servicio.estadisticas.tiempoReal;
          }
          totalTiempoEstandar += servicio.cantidad * servicio.tiempoEstandar * 60;
        });

        var eficiencia = 0
        if (totalTiempoReal != 0) {
          eficiencia = totalTiempoEstandar / totalTiempoReal * 100
        } else {
          eficiencia = 100
        }
        res.estadisticas = { tiempoEstandar: totalTiempoEstandar, tiempoReal: totalTiempoReal, finalizadas: finalizadas, eficiencia: eficiencia.toFixed(2) }
        this.orden = res


      })

  }

}
