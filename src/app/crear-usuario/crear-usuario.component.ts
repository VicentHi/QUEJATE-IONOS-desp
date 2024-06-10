import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { CrearUsuarioService } from '../crear-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css',
})
export class CrearUsuarioComponent {
  formularioUsuario: FormGroup;

  mensajeUsuarioCreado: string = '';
  mensajeDNIregistrado: string = '';
  usuarioCreado: boolean = false;

  dniRegistrado: boolean = false;

  passMensa: boolean = false;

  @Output() mensajeUsuarioCreadoEvent = new EventEmitter<string>();
  @Output() mensajeDNIregistradoEvent = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder,
    private crearUsuarioService: CrearUsuarioService,
    private router: Router
  ) {
    this.formularioUsuario = this.formBuilder.group({
      dni: ['', [Validators.required, validarDNI()]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      direccion: [''],
      poblacion: [''],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{6,}$')]],
      rol: [''],
      archivo: [''],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPass: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.formularioUsuario.value);


    const password = this.formularioUsuario.get('password')!.value;
    const confirmPass = this.formularioUsuario.get('confirmPass')!.value;


    if (password !== confirmPass) {
      this.passMensa = true;
    } else {
      this.passMensa = false;
    }

    if (this.formularioUsuario.valid && !this.passMensa) {
      const usuario = this.formularioUsuario.value;

      this.crearUsuarioService.crearUsuario(usuario).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          if (response.error === 'DNI ya registrado') {
            console.error('DNI ya está registrado');

            this.mensajeDNIregistrado = 'DNI ya está registrado';
            this.mensajeDNIregistradoEvent.emit(
              this.mensajeDNIregistrado
            );
          } else {
            console.log('Usuario creado');

            this.mensajeUsuarioCreado = 'Usuario creado exitosamente';
            this.mensajeUsuarioCreadoEvent.emit(
              this.mensajeUsuarioCreado
            );
            this.usuarioCreado = true;
          }
        },
        (error) => {
          console.error('Error al crear el usuario:', error);
        }
      );
    }
  }

  borrarMensajes() {
    this.mensajeUsuarioCreado = '';
    this.mensajeDNIregistrado = '';
  }

  volver() {
    this.router.navigate(['/']);
  }
}

function validarDNI(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const dniRegex = /^[0-9]{8}[a-zA-Z]$/;
    const value = control.value;
    if (value && !dniRegex.test(value)) {
      return { dniInvalido: true };
    }
    return null;
  };
}
