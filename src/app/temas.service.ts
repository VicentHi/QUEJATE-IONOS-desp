import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TemasService {

  private baseUrl = 'http://localhost:8080/arxius/Q_temas.php';

  constructor(private http: HttpClient) { }

  obtenerTemas(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)
      .pipe(
        catchError(error => {
          console.error('Error al obtener los temas:', error);
          return throwError('Error al obtener los temas');
        })
      );
  }

}
