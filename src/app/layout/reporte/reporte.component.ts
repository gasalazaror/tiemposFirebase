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
import { AnadirCerosPipe } from '../../pipes/anadir-ceros.pipe';

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
  ordenSeleccionada: any = ''
  operadorSeleccionado: any = ''
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
  ordenes: any = [];
  operadores: any = []

  tareas: any[] = []
  estadisticas: any = { te: 0, tr: 0, fin: 0, tefin: 0, eficiencia: 0 }

  cita

  orden: any[] = []


  public pieChartLabels: string[] = [
    'Cita/Recepción',
    'En Producción',
    'En Espera',
    'En Pausa',
    'Por Facturar'
  ];
  public pieChartData: number[] = [0, 0, 0, 0];

  public pieChartLabelsEficiencia: string[] = [
    'Muy buena',
    'Buena',
    'Regular',
  ];
  public pieChartDataEficiencia: number[] = [0, 0, 0];

  public pieChartType: string = 'pie';



  servicios: Observable<any>
  filtroTiempo: any = { inicio: this.convertir(Date.now()), iniciohora: '00:00', fin: this.convertir(Date.now()), finhora: '23:59' }
  operaciones: Observable<any>


  constructor(private ordenService: OrdenService, private personaService: PersonaService, private servicioService: ServicioService) {

    $('#reporte').DataTable().destroy();
    this.tareas = []
    this.dtTrigger.next();




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



  buscarPorOrden() {

    if (this.ordenSeleccionada != '') {
      this.buscarTareasPorOrden(this.ordenSeleccionada)

    } else {

      swal('Existió un error', 'Seleccione una Orden de Trabajo para continuar', 'error')
    }

  }






  buscarOrdenes() {
    var fechiInicio = new Date(this.filtroTiempo.inicio + " 00:00")
    var fechaFin = new Date(this.filtroTiempo.fin + " 23:59")

    this.ordenService.obtenerOrdenesFecha(fechiInicio, fechaFin)
      .subscribe(ordenes => {
        this.ordenes = []
        this.operadores = []



        this.tareas = []

        var porfacturar = 0
        var cita = 0
        var produccion = 0
        var espera = 0
        var pausa = 0
        this.estadisticas.te = 0
        this.estadisticas.tr = 0
        this.estadisticas.fin = 0
        this.estadisticas.tefin = 0
        this.estadisticas.eficiencia = 100

        ordenes.forEach((orden: any) => {

          orden.data.numero = 'OT-' + new AnadirCerosPipe().transform(orden.data.numero, 5)

          this.ordenes.push(orden)

          if (this.ordenSeleccionada && this.ordenSeleccionada != "") {
            if (orden.id == this.ordenSeleccionada) {
              orden.data.servicios.forEach(servicio => {

                this.operadores.push(servicio.operador)

                if(this.operadorSeleccionado && this.operadorSeleccionado != ""){
                  if(this.operadorSeleccionado==servicio.operador.id){
                  
  
  
                    this.estadisticas.te += servicio.tiempoEstandar * servicio.cantidad * 60
                    if (servicio.estadisticas) {
                      porfacturar++
                      this.estadisticas.fin++
                      this.estadisticas.tr += servicio.estadisticas.tiempoReal
                      this.estadisticas.tefin += servicio.estadisticas.tiempoEstandar
                    }
      
                    if (servicio.estado == 'EN PRODUCCIÓN') {
                      produccion++
                    }
      
                    if (servicio.estado == 'CITA/RECEPCION') {
                      cita++
                    }
      
                    if (servicio.estado == 'EN ESPERA DE PRODUCCIÓN') {
                      espera++
                    }
      
                    if (servicio.estado == 'EN PRODUCCIÓN - PAUSADO') {
                      pausa++
                    }
      
      
      
                    servicio.orden = { id: orden.id, numero: orden.data.numero, cliente: orden.data.cliente, vehiculo: orden.data.vehiculo, fecha: orden.data.fecha }
                    this.tareas.push(servicio)
                  }
                }else{
            
  
  
                  this.estadisticas.te += servicio.tiempoEstandar * servicio.cantidad * 60
                  if (servicio.estadisticas) {
                    porfacturar++
                    this.estadisticas.fin++
                    this.estadisticas.tr += servicio.estadisticas.tiempoReal
                    this.estadisticas.tefin += servicio.estadisticas.tiempoEstandar
                  }
    
                  if (servicio.estado == 'EN PRODUCCIÓN') {
                    produccion++
                  }
    
                  if (servicio.estado == 'CITA/RECEPCION') {
                    cita++
                  }
    
                  if (servicio.estado == 'EN ESPERA DE PRODUCCIÓN') {
                    espera++
                  }
    
                  if (servicio.estado == 'EN PRODUCCIÓN - PAUSADO') {
                    pausa++
                  }
    
    
    
                  servicio.orden = { id: orden.id, numero: orden.data.numero, cliente: orden.data.cliente, vehiculo: orden.data.vehiculo, fecha: orden.data.fecha }
                  this.tareas.push(servicio)
                }
  

              });


            }
          } else {


            orden.data.servicios.forEach(servicio => {

              this.operadores.push(servicio.operador)

              if(this.operadorSeleccionado && this.operadorSeleccionado != ""){
                if(this.operadorSeleccionado==servicio.operador.id){
                


                  this.estadisticas.te += servicio.tiempoEstandar * servicio.cantidad * 60
                  if (servicio.estadisticas) {
                    porfacturar++
                    this.estadisticas.fin++
                    this.estadisticas.tr += servicio.estadisticas.tiempoReal
                    this.estadisticas.tefin += servicio.estadisticas.tiempoEstandar
                  }
    
                  if (servicio.estado == 'EN PRODUCCIÓN') {
                    produccion++
                  }
    
                  if (servicio.estado == 'CITA/RECEPCION') {
                    cita++
                  }
    
                  if (servicio.estado == 'EN ESPERA DE PRODUCCIÓN') {
                    espera++
                  }
    
                  if (servicio.estado == 'EN PRODUCCIÓN - PAUSADO') {
                    pausa++
                  }
    
    
    
                  servicio.orden = { id: orden.id, numero: orden.data.numero, cliente: orden.data.cliente, vehiculo: orden.data.vehiculo, fecha: orden.data.fecha }
                  this.tareas.push(servicio)
                }
              }else{
          


                this.estadisticas.te += servicio.tiempoEstandar * servicio.cantidad * 60
                if (servicio.estadisticas) {
                  porfacturar++
                  this.estadisticas.fin++
                  this.estadisticas.tr += servicio.estadisticas.tiempoReal
                  this.estadisticas.tefin += servicio.estadisticas.tiempoEstandar
                }
  
                if (servicio.estado == 'EN PRODUCCIÓN') {
                  produccion++
                }
  
                if (servicio.estado == 'CITA/RECEPCION') {
                  cita++
                }
  
                if (servicio.estado == 'EN ESPERA DE PRODUCCIÓN') {
                  espera++
                }
  
                if (servicio.estado == 'EN PRODUCCIÓN - PAUSADO') {
                  pausa++
                }
  
  
  
                servicio.orden = { id: orden.id, numero: orden.data.numero, cliente: orden.data.cliente, vehiculo: orden.data.vehiculo, fecha: orden.data.fecha }
                this.tareas.push(servicio)
              }



            

            });

          }



        });




        const data = [
          cita, produccion, espera, pausa, porfacturar
        ];


        this.pieChartData = data;

        if (this.estadisticas.tefin == 0 || this.estadisticas.tr == 0) {
          this.estadisticas.eficiencia = 100
        } else {
          this.estadisticas.eficiencia = ((this.estadisticas.tefin / this.estadisticas.tr) * 100).toFixed(2)

        }
        $('#reporte').DataTable().destroy();
        this.dtTrigger.next();
        this.operadores = this.eliminarObjetosDuplicados(this.operadores, "id")


      })
  }

  public chartClicked(e: any): void {

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

  eliminarObjetosDuplicados(arr, prop) {
    var nuevoArray = [];
    var lookup = {};

    for (var i in arr) {
      lookup[arr[i][prop]] = arr[i];
    }

    for (i in lookup) {
      nuevoArray.push(lookup[i]);
    }

    return nuevoArray;
  }

}
