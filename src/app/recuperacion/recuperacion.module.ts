import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [RecuperacionComponent]
})
export class RecuperacionModule { }
