import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './administracion.component';



const routes: Routes = [
  {
    path: '',
    component: AdministracionComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
