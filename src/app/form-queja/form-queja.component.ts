import { UserRegistradoService } from './../user-registrado.service';
import { InsertQuejaService } from './../insert-queja.service';
import { TemasService } from './../temas.service';
import { Component, OnInit } from '@angular/core';
import { ClientDatosService } from '../client-datos.service';

@Component({
  selector: 'app-form-queja',
  templateUrl: './form-queja.component.html',
  styleUrl: './form-queja.component.css',
})
export class FormQuejaComponent implements OnInit {
  clientArray: any[] = [];
  temasQueja: string[] = [];
  temas: any[] = [];
  temaSeleccionado: string | null = null;
  usuario: any;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  mostrarErroresBlanco: boolean = false;
  descripcionValida: boolean = true;

  queja = {
    id_usuario: '',
    titulo: '',
    descripcion: '',
    nombre_institucion: '',
    email: '',
    alias: 'Anónimo',
  };

  constructor(
    private clientDatosService: ClientDatosService,
    private temasService: TemasService,
    private insertQuejaService: InsertQuejaService,
    private userRegistradoService: UserRegistradoService
  ) {}

  ngOnInit(): void {
    this.clientDatosService.data$.subscribe((data) => {
      this.clientArray = data;

      if (this.clientArray.length > 0) {
        this.queja.id_usuario = this.clientArray[0].id_usuario;
        console.log('dato', this.clientArray[0].id_usuario);

        console.log('ID de usuario:', this.queja.id_usuario);
        console.log('Alias:', this.queja.alias);

        this.temasService.obtenerTemas().subscribe((temas) => {
          this.temas = temas;
          console.log('Temas obtenidos2:', temas);
        });
      }
    });

    this.usuario = this.userRegistradoService.getUser();

  }

  onTemaSeleccionado(): void {
    console.log('Tema seleccionado:', this.temaSeleccionado);
    if (this.temaSeleccionado !== null) {
      this.queja.titulo = this.temaSeleccionado;
    }
  }



  enviarQueja() {
    this.mostrarErroresBlanco = true;

    //this.clientArray[0].username;

    if (
      this.temaSeleccionado &&
      this.queja.descripcion &&
      this.descripcionValida
    ) {
      this.insertQuejaService.enviarQueja(this.queja).subscribe(
        (response) => {
          console.log('Queja enviada:', response);
          this.successMessage =
            '¡Queja Registrada! Tu queja ayuda a que otros usuarios conozcan tu experiencia.';
          this.errorMessage = null;
          this.mostrarErroresBlanco = false;
          console.log('queja', this.queja);
        },

        (error) => {
          this.errorMessage =
            'Error al enviar la queja. Por favor, inténtalo de nuevo más tarde.';
        }
      );
    } else {
      this.errorMessage = 'Por favor, revise los mensajes de error.';
    }
  }

  limitarPalabras(textareaValue: string) {
    const words = textareaValue.split(' ');
    const maxWordLength = 20;

    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxWordLength) {
        words[i] = words[i].substring(0, maxWordLength);
      }
    }

    this.queja.descripcion = words.join(' ');
  }

  validarDescripcion(descripcion: string): void {
    const wordCount = descripcion.trim().split(/\s+/).length;
    this.descripcionValida = wordCount >= 3;
  }

  onModelChange(value: string): void {
    this.limitarPalabras(value);
    this.validarDescripcion(value);
  }
}
