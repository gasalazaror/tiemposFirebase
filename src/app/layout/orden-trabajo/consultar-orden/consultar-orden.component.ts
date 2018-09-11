import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { OrdenService } from '../../../servicios/orden/orden.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import swal from 'sweetalert2'
import { AngularFireAuth } from 'angularfire2/auth';

import { ReporteService } from '../../../servicios/reporte/reporte.service';
import { PersonaService } from '../../../servicios/persona.service';

var jsPDF = require('jspdf')
require('jspdf-autotable')



@Component({
  selector: 'app-consultar-orden',
  templateUrl: './consultar-orden.component.html',
  styleUrls: ['./consultar-orden.component.scss'],
  animations: [routerTransition()]
})
export class ConsultarOrdenComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  user: any = ''
  dtOptions: DataTables.Settings = this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5,
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

  ordenes: any[] = [];


  constructor(private personaService: PersonaService, private ordenService: OrdenService, private aFaut: AngularFireAuth, private reporteService: ReporteService) {

  }

  ngOnInit() {
    this.obtenerOrdenes()

    this.personaService.obtenerUsuario().subscribe(res => {
      this.user = res
    })
  }

  print(orden) {
    this.reporteService.reporteCliente(orden)

  //   var columns = ["Cantidad", "Producto servicio"]
  //   var rows = []
  //   orden.data.servicios.forEach(servicio => {
  //     rows.push([servicio.cantidad, servicio.descripcion])
  //   });
  //   const doc = new jsPDF()
  //   var rightStartCol1=400;
  //   var rightStartCol2=480;
  //   var InitialstartX=40;
  //   var startX=40;
  //   var InitialstartY=50;
  //   var startY=0;
  //   var lineHeights=12;
  //   doc.textAlign('Cineto Telecomunicaciones', {align: "left"}, startX, startX);
  //   doc.autoTable(columns, rows, {
   
    
  //     margin: {top: 60},
     
  // });

  //   doc.save('ejemplo.pdf')
  }

  obtenerOrdenes() {

    this.ordenService.obtenerOrdenes()
      .subscribe(res => {
        $('#example-datatable').DataTable().destroy();



        this.ordenes = res
        this.ordenes.forEach(orden => {
          orden.esUsuario == false

          orden.data.servicios.forEach(servicio => {


            if (servicio.operador.data.correo == this.user.email) {
              orden.esUsuario = true
            }
          });


        });
        this.dtTrigger.next();
      })

  }

  imprimirOrden(orden) {
    var pdf = new jsPDF('p', 'pt', 'letter');
    var source = $('#imprimir')[0];

    var specialElementHandlers = {
      '#bypassme': function (element, renderer) {
        return true
      }
    };
    var margins = {
      top: 80,
      bottom: 60,
      left: 40,
      width: 522
    };

    pdf.fromHTML(
      source,
      margins.left, // x coord
      margins.top, { // y coord
        'width': margins.width,
        'elementHandlers': specialElementHandlers
      },

      function (dispose) {
        pdf.save('Prueba.pdf');
      }, margins
    );

  }

  eliminarOrden(orden) {
    swal({
      title: 'Está seguro?',
      text: "Está seguro que desea eliminar la orden seleccionada",
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {

        this.ordenService.eliminarOrden(orden.id).then(res => {

          swal(
            'Listo!',
            'Orden de trabajo eliminada correctamente.',
            'success'
          )
        })


      }
    })



  }

}
