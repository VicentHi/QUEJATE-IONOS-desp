import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserRegistradoService {

  private baseUrl = 'http://localhost:8080/arxius/Q_userQueja.php';
  private usuario: any;

  constructor(private http: HttpClient) { }

  registrado(username: string): void {
    console.log(`Se registró una queja para el usuario ${username}`);

  }

  obtenerUsuario(username: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?username=${username}`);
  }

  setUser(usuario: any): void {
    this.usuario = usuario; // Almacena el usuario
  }

  getUser(): any {
    return this.usuario; // Retorna el usuario almacenado
  }
}

