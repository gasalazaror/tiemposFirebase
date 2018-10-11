import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioService } from '../../../servicios/usuario/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = []
  suscripcion = this.usuarioService.obtenerUsuarios()
    .subscribe((res: any) => {

      this.usuarios = res
    })


  constructor(private usuarioService: UsuarioService) {

  }


  ngOnInit() {



  }

  ngOnDestroy() {
    console.log(this.suscripcion.unsubscribe())
    
  }

  obtenerServicios() {


  }

}
