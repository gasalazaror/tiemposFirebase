import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import { ConsultarPersonaComponent } from './consultar-persona/consultar-persona.component';
import { InformacionPersonaComponent } from './informacion-persona/informacion-persona.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule
  ],
  exports: [CrearPersonaComponent],
  declarations: [CrearPersonaComponent, ConsultarPersonaComponent, InformacionPersonaComponent]
})
export class PersonaModule { }
