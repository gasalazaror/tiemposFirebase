import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import { ConsultarPersonaComponent } from './consultar-persona/consultar-persona.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CrearPersonaComponent, ConsultarPersonaComponent]
})
export class PersonaModule { }
