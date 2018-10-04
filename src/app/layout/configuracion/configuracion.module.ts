import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PageHeaderModule
  ],
  declarations: [UsuarioComponent]
})
export class ConfiguracionModule { }
