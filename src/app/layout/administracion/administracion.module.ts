import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';

import { PageHeaderModule } from '../../shared';
import { AdministracionComponent } from './administracion.component';
import { EmpresaComponent } from './empresa/empresa.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PageHeaderModule
    
  ],
  declarations: [AdministracionComponent, EmpresaComponent ]
})
export class AdministracionModule { }
