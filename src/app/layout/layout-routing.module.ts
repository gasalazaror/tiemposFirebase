import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'administracion', loadChildren: './administracion/administracion.module#AdministracionModule' },
            { path: 'persona', loadChildren: './persona/persona.module#PersonaModule' },
            { path: 'vehiculo', loadChildren: './vehiculo/vehiculo.module#VehiculoModule' },
            { path: 'servicio', loadChildren: './servicio/servicio.module#ServicioModule' },
            { path: 'reporte', loadChildren: './reporte/reporte.module#ReporteModule' },
            { path: 'configuracion', loadChildren: './configuracion/configuracion.module#ConfiguracionModule' },
            { path: 'orden', loadChildren: './orden-trabajo/orden-trabajo.module#OrdenTrabajoModule' },
            
         
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
