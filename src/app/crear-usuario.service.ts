import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {

  private baseUrl = 'http://localhost:8080/arxius/Q_crearUsuario.php';

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, usuario)
      .pipe(
        catchError(error => {
          console.error('Error al crear el usuario:', error);
          return throwError('Error al crear el usuario');
        })
      );
  }
}
