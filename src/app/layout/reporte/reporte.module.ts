import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';
import { ReporteComponent } from './reporte.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PageHeaderModule,
  ],
  declarations: [ReporteComponent]
})
export class ReporteModule { }
