import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { LayoutComponent } from './layout/layout.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'empresa',
    component: EmpresaComponent
  }
  ,
  {
    path: 'usuarios',
    component: UsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }