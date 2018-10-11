import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { PageHeaderModule } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpresaComponent } from './empresa/empresa.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PageHeaderModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UsuarioComponent, EmpresaComponent, LayoutComponent, UsuariosComponent]
})
export class ConfiguracionModule { }
