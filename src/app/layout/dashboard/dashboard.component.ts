import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Observable } from 'rxjs';
import { PersonaService } from '../../servicios/persona.service';
import { VehiculoService } from '../../servicios/vehiculo/vehiculo.service';
import { OrdenService } from '../../servicios/orden/orden.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public personas: Observable<any>
    public vehiculos: Observable<any>
    public ordenes: Observable<any>
    public numeroOrdenes: number = 0
    public numeroVehiculos: number = 0
    public numeroPersonas: number = 0

    constructor(public personaService: PersonaService, public vehiculoService: VehiculoService, public ordenServicio: OrdenService) {

        this.personas = this.personaService.obtenerClientes()
        this.personas.subscribe(res => {
            this.numeroPersonas = res.length
            console.log(this.numeroPersonas)
        })

        this.vehiculos = this.vehiculoService.obtenerVehiculos()
        this.vehiculos.subscribe(res => {
            this.numeroVehiculos = res.length
      
        })

        this.ordenes = this.ordenServicio.obtenerOrdenes()
        this.ordenes.subscribe(res => {
            this.numeroOrdenes = res.length
      
        })

        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() { }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
