import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CrearOrdenComponent } from './crear-orden/crear-orden.component';
import { ConsultarOrdenComponent } from './consultar-orden/consultar-orden.component';
import { InformacionOrdenComponent } from './informacion-orden/informacion-orden.component';

const routes: Routes = [
  {
    path: 'crearorden',
    component: CrearOrdenComponent
  },
  {
    path: 'consultarorden',
    component: ConsultarOrdenComponent
  },
  {
    path: 'informacionorden/:id',
    component: InformacionOrdenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
