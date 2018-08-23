import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificacionComponent } from './verificacion/verificacion.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [VerificacionComponent]
})
export class VerificacionModule { }
