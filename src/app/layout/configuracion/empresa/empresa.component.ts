import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../../servicios/persona.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import swal from 'sweetalert2'



@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],

})
export class EmpresaComponent implements OnInit {

  empresa: any = {}
  formularioEmpresa = this.fb.group({
    ruc: ['', Validators.required],
    nombre: ['', Validators.required],
    correo: ['', Validators.required],
    direccion: ['', Validators.required],
    telefono: ['', Validators.required],
    foto: ['', Validators.required],
  })
  constructor(
    private configuracionService: PersonaService,
    private fb: FormBuilder,
    private storage: AngularFireStorage
  ) {

    configuracionService.obtenerEmpresa().valueChanges().subscribe(empresa => {
      this.empresa = empresa

      this.formularioEmpresa = this.fb.group({
        ruc: [empresa.ruc, Validators.required],
        nombre: [empresa.nombre, Validators.required],
        correo: [empresa.correo, Validators.required],
        direccion: [empresa.direccion, Validators.required],
        telefono: [empresa.telefono, Validators.required],
        foto: [empresa.foto, Validators.required],
      })

    })
  }

  ngOnInit() {
  }

  handleUpload(e): void {
    console.log(e.target.value)
    this.formularioEmpresa.value.foto = e.target.value;

  }

  uploadFile(event) {
    if (event.target.files[0]) {
      const file = event.target.files[0];
      console.log(file.size)
      if (file.size > 1000000) {
   

        swal('Existió un error','El tamaño de la imagen no puede ser mayor a 1mb','error')
      }
      else {
        const filePath = file.name;
        const ref = this.storage.ref(filePath);
        const task = ref.put(file);
        task.then(res => {
          ref.getDownloadURL().subscribe(ref => {
            this.formularioEmpresa.value.foto = ref
          })
        })
      }
    }
  }

  guardarEmpresa() {

    swal({
      title: 'Está seguro?',
      text: "Desea modificar la información de la empresa!",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, modificar!'
    }).then((result) => {
      if (result.value) {
        this.configuracionService.modificarEmpresa(this.formularioEmpresa.value).then(res=>{
          swal(
            'Modificado!',
            'la información de la empresa ha sido modificada correctamente.',
            'success'
          )
        })
       
      }
    })

   
  }

}
