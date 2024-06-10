import { UltimasQuejasService } from './../ultimas-quejas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ultimas-quejas',
  templateUrl: './ultimas-quejas.component.html',
  styleUrl: './ultimas-quejas.component.css',
})
export class UltimasQuejasComponent implements OnInit {
  data: any[] = [];
  p: number = 1;

  constructor(private ultimasQuejasService: UltimasQuejasService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.ultimasQuejasService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log('data', response);
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
}
