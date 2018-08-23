import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerificacionComponent } from './verificacion/verificacion.component';

const routes: Routes = [
  {
      path: 'email/:id',
      component: VerificacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
