import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { OrdenService } from '../../../servicios/orden/orden.service';

@Component({
  selector: 'app-mis-ordenes',
  templateUrl: './mis-ordenes.component.html',
  styleUrls: ['./mis-ordenes.component.scss'],
  animations: [routerTransition()]
})
export class MisOrdenesComponent implements OnInit {

  ordenes: Observable<any[]>;
  tareas: any
  usuarioid:any

  constructor(private afAuth: AngularFireAuth, private ordenService: OrdenService) {
    this.usuarioid=''
   }

  ngOnInit() {
    this.obtenerOrdenes()
    this.afAuth.user.subscribe(res=>{
      this.usuarioid = res.uid
    })
    
  }

  obtenerOrdenes() {
    this.ordenes = this.ordenService.obtenerOrdenes();

    this.ordenes.subscribe(res => {
      this.tareas = []
      res.forEach(element => {
        element.data.servicios.forEach(servicio => {


          if (!servicio.operador) {
            servicio.operador = { data: { nombre: '' } }
          }

          const motivo = ''
          if (servicio.pausas) {
            servicio.pausas.forEach(pausa => {
              if (pausa.id == servicio.pausaActual) {
                servicio.motivo = pausa.motivo.motivo
              }
            });
          }


          this.tareas.push({ cliente: element.data.cliente, servicio: servicio, vehiculo: element.data.vehiculo })


        });
        console.log(this.tareas)

      });
    })

  }

}
