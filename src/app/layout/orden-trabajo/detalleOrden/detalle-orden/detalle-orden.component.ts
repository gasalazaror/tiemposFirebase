import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { OrdenService } from '../../../../servicios/orden/orden.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.scss']
})
export class DetalleOrdenComponent implements OnInit {

  id: any
  orden: Observable<any>;
  servicios: any;
  newIndex: any
  closeResult: string;
  pausa = {
    motivo: '',
    observacion: ''
  }

  servicioSeleccionado: any

  constructor(private route: ActivatedRoute,
    private modalService: NgbModal,
    private ordenService: OrdenService,
    private db: AngularFirestore) {

    this.servicios = []
    this.id = this.route.snapshot.paramMap.get('id');
    this.orden = this.ordenService.obtenerUnaOrden(this.id);
    this.orden.subscribe(res => {
      this.servicios = res.servicios
      console.log(this.servicios)

    })

  }

  ngOnInit() {
  }

  iniciarServicio(index) {
    const confirmacion = confirm("¿Está seguro que desea iniciar la tarea seleccionada?")
    if (confirmacion) {
      this.servicios[index].estado = 'EN PRODUCCIÓN'
      this.servicios[index].horaInicio = new Date()
      this.ordenService.modificarServicio(this.id, { servicios: this.servicios })
    } else {
    }
  }

  finalizarServicio(index) {
    const confirmacion = confirm("¿Está seguro que desea finalizar la tarea seleccionada?")
    if (confirmacion) {
      this.servicios[index].estado = 'POR FACTURAR'
      this.servicios[index].horaFin = new Date()
      this.ordenService.modificarServicio(this.id, { servicios: this.servicios })
    } else {
    }
  }

  open(content, index) {
    this.servicioSeleccionado = this.servicios[index]
    this.newIndex = index
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

    });
  }

  pausar() {
    const id = this.db.createId()

    if (!this.servicios[this.newIndex].pausas) {
      this.servicios[this.newIndex].pausas = []
    }
    this.servicios[this.newIndex].estado = 'EN PRODUCCIÓN - PAUSADO'
    this.servicios[this.newIndex].pausaActual = id
    this.servicios[this.newIndex].motivoPausa = this.pausa.motivo
    this.servicios[this.newIndex].pausas.push({ horaInicio: new Date(), motivo: this.pausa, id: id })
    this.ordenService.modificarServicio(this.id, { servicios: this.servicios })
  }

  reanudarServicio(indice) {

    const confirmacion = confirm("¿Está seguro que desea finalizar la tarea seleccionada?")
    if (confirmacion) {
      this.servicios[indice].estado = 'EN PRODUCCIÓN'
      this.servicios[indice].pausas.forEach(pausa => {
        if (pausa.id == this.servicios[indice].pausaActual) {
          pausa.horaFin = new Date()
        }
      });
      this.ordenService.modificarServicio(this.id, { servicios: this.servicios })
    }

  }

}
