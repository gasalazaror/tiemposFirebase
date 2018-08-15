import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearServicioComponent } from './crear-servicio/crear-servicio.component';
import { ConsultarServicioComponent } from './consultar-servicio/consultar-servicio.component';
import { InformacionServicioComponent } from './informacion-servicio/informacion-servicio.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageHeaderModule } from '../../shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),

  ],
  exports: [CrearServicioComponent],
  declarations: [CrearServicioComponent, ConsultarServicioComponent, InformacionServicioComponent]
})
export class ServicioModule { }
