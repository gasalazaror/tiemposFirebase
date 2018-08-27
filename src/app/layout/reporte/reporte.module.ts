import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';
import { ReporteComponent } from './reporte.component';
import { PageHeaderModule } from '../../shared';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PageHeaderModule,
    DataTablesModule
  ],
  declarations: [ReporteComponent]
})
export class ReporteModule { }
