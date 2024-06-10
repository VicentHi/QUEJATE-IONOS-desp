import { BuscarTemasService } from './../buscar-temas.service';
import { Component, OnInit, Input } from '@angular/core';
import { TemasService } from '../temas.service';

@Component({
  selector: 'app-buscar-temas',
  templateUrl: './buscar-temas.component.html',
  styleUrl: './buscar-temas.component.css',
})
export class BuscarTemasComponent implements OnInit {
  temas: any[] = [];
  temaSeleccionado: any;
  data: any[] = [];
  p: number = 1;
  hayResultados = false;

  constructor(
    private temasService: TemasService,
    private buscarTemasService: BuscarTemasService
  ) {}

  ngOnInit(): void {
    this.obtenerTemas();
  }

  obtenerTemas(): void {
    this.temasService.obtenerTemas().subscribe(
      (temas) => {
        this.temas = temas;
        console.log('Temas obtenidos:', temas);
      },
      (error) => {
        console.error('Error al obtener los temas:', error);
      }
    );
  }

  seleccionarTema(event: any): void {
    const target = event.target as HTMLSelectElement;
    if (target) {
      const valorSeleccionado = target.value;
      if (valorSeleccionado) {
        this.temaSeleccionado = valorSeleccionado;
        console.log('Tema seleccionado:', this.temaSeleccionado);

        this.buscarPorTema(this.temaSeleccionado);
      }
    }
  }

  buscarPorTema(tema: any) {
    this.buscarTemasService.bucarPorTema(tema).subscribe(
      (data) => {
        this.data = data;
        console.log('Resultados de búsqueda:', data);
        this.hayResultados = true;
      },
      (error) => {
        console.error('Error al buscar por tema:', error);
      }
    );
  }
}
