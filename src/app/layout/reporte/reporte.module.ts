import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';
import { ReporteComponent } from './reporte.component';
import { PageHeaderModule } from '../../shared';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { AnadirCerosPipe } from '../../pipes/anadir-ceros.pipe';
import { OrdenTrabajoModule } from '../orden-trabajo/orden-trabajo.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PageHeaderModule,
    DataTablesModule,
    FormsModule,
    OrdenTrabajoModule,
    NgSelectModule
  ],
  declarations: [ReporteComponent]
})
export class ReporteModule { }
