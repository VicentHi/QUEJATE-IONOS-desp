import { TemasService } from '../temas.service';
import { ClientDatosService } from './../client-datos.service';
import { UserRegistradoService } from '../user-registrado.service';
import { Component } from '@angular/core';
import { ValidaService } from '../valida.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.css'],
})
export class ValidacionComponent {
  username: string = '';
  password: string = '';
  credentialsValid: boolean = true;
  showInsertFormFlag: boolean = false;
  temas: string[] = [];

  confirmPass!: string;
  passValid: boolean = true;
  passMensa: boolean = false;

  constructor(
    private validaService: ValidaService,
    private userRegistradoService: UserRegistradoService,
    private router: Router,
    private clientDatosService: ClientDatosService,
    private temasService: TemasService
  ) {}

  checkCredentials() {

    this.passMensa = this.password !== this.confirmPass;

    if (this.passMensa) {
      return;
    }

    if (!this.username || !this.password) {
      this.credentialsValid = false;
      return;
    }

    this.validaService.getUsers().subscribe(
      (users: any[]) => {
        const isValid = users.some(
          (user) =>
            user.username === this.username && user.password === this.password
        );

        this.credentialsValid = isValid;

        console.log('Credenciales válidas:', this.credentialsValid);

        if (isValid) {
          this.userRegistradoService.obtenerUsuario(this.username).subscribe(
            (usuario) => {
              console.log('Usuario obtenido:', usuario);
              this.clientDatosService.sendData(usuario);
              this.userRegistradoService.setUser(usuario);
              this.router.navigateByUrl('/');
            },
            (error) => {
              console.error('Error al obtener usuario::', error);
              this.credentialsValid = false;
            }
          );

          this.temasService.obtenerTemas().subscribe(
            (temas) => {
              this.temas = temas;
              console.log('Temas obtenidos1:', temas);
            },
            (error) => {
              console.error('Error al obtener los temas:', error);
            }
          );
        }
      },
      (error) => {
        console.error('Error al obtener usuario:', error);
        this.credentialsValid = false;
      }
    );
  }

  showInsertForm() {
    console.log('showInsertForm() llamada');
    this.showInsertFormFlag = true;
  }

  insertUser() {
    this.router.navigateByUrl('/crear-usuario');
  }
}
