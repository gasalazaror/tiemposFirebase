import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { ConsultarVehiculoComponent } from './consultar-vehiculo/consultar-vehiculo.component';



const routes: Routes = [
  {
    path: 'crearvehiculo',
    component: CrearVehiculoComponent
  },

  {
    path: 'consultarvehiculo',
    component: ConsultarVehiculoComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
