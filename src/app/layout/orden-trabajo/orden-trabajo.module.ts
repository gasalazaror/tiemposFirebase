import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';
import { CrearOrdenComponent } from './crear-orden/crear-orden.component';
import { ConsultarOrdenComponent } from './consultar-orden/consultar-orden.component';
import { InformacionOrdenComponent } from './informacion-orden/informacion-orden.component';
import { PageHeaderModule } from '../../shared';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { PersonaModule } from '../persona/persona.module';
import { VehiculoModule } from '../vehiculo/vehiculo.module';
import { ServicioModule } from '../servicio/servicio.module';
import { OperacionComponent } from './operacion/operacion.component';
import { DataTablesModule } from 'angular-datatables';
import { OrdenTrabajoComponent } from './orden-trabajo.component';
import { MisOrdenesComponent } from './mis-ordenes/mis-ordenes.component';
import { DetalleOrdenComponent } from './detalleOrden/detalle-orden/detalle-orden.component';
import { DetalleTareaComponent } from './detalle-tarea/detalle-tarea.component';
import { FormatTimePipe } from '../../pipes/format-time.pipe';
import { AnadirCerosPipe } from '../../pipes/anadir-ceros.pipe';
import { ConfiguracionComponent } from './configuracion/configuracion.component';



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PageHeaderModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    PersonaModule,
    VehiculoModule,
    ServicioModule,
    DataTablesModule,
    ServicioModule
  ],
  exports:[AnadirCerosPipe,FormatTimePipe],
  declarations: [CrearOrdenComponent, ConsultarOrdenComponent, InformacionOrdenComponent, OperacionComponent, OrdenTrabajoComponent, MisOrdenesComponent, DetalleOrdenComponent, DetalleTareaComponent, AnadirCerosPipe, ConfiguracionComponent]
})
export class OrdenTrabajoModule { }
