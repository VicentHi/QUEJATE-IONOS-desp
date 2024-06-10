import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarTemasService {

  private baseUrl = 'http://localhost:8080/arxius/Q_buscarPorTemas.php';

  constructor(
    private http: HttpClient ) { }

  buscarTema(tema: any): void {

    console.log('tema:', tema);
  }

  bucarPorTema(tema: any): Observable<any> {

    const url = `${this.baseUrl}?tema=${tema}`;
    return this.http.get(url);
  }
}
