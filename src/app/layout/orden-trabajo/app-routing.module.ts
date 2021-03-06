import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CrearOrdenComponent } from './crear-orden/crear-orden.component';
import { ConsultarOrdenComponent } from './consultar-orden/consultar-orden.component';
import { InformacionOrdenComponent } from './informacion-orden/informacion-orden.component';
import { OperacionComponent } from './operacion/operacion.component';
import { MisOrdenesComponent } from './mis-ordenes/mis-ordenes.component';
import { DetalleOrdenComponent } from './detalleOrden/detalle-orden/detalle-orden.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

const routes: Routes = [
  {
    path: 'crearorden/:id',
    component: CrearOrdenComponent
  },
  {
    path: 'consultarorden',
    component: ConsultarOrdenComponent
  },
  {
    path: 'informacionorden/:id',
    component: InformacionOrdenComponent
  },
  {
    path: 'detalleorden/:id',
    component: DetalleOrdenComponent
  },
  {
    path: 'operaciones',
    component: OperacionComponent
  },
  {
    path: 'misoperaciones',
    component: MisOrdenesComponent
  },
  {
    path: 'configuracion',
    component: ConfiguracionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
