import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';
import { CrearOrdenComponent } from './crear-orden/crear-orden.component';
import { ConsultarOrdenComponent } from './consultar-orden/consultar-orden.component';
import { InformacionOrdenComponent } from './informacion-orden/informacion-orden.component';
import { PageHeaderModule } from '../../shared';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PageHeaderModule,
    NgSelectModule
    
  ],
  declarations: [CrearOrdenComponent, ConsultarOrdenComponent, InformacionOrdenComponent]
})
export class OrdenTrabajoModule { }
