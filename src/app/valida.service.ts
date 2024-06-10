import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ValidaService {
  private baseUrl = 'http://localhost:8080/arxius/Q_valida.php';

  constructor(private http: HttpClient) {}

  checkCredentials(username: string, password: string): Observable<boolean> {
    return this.http
      .post<any>(`${this.baseUrl}/login`, { username, password })
      .pipe(map((response) => response.success === true));
  }

  createUser(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, { username, password });
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }
}
