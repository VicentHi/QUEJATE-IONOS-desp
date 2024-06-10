import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UltimasQuejasService {

  private baseUrl = 'http://localhost:8080/arxius/Q_quejasUltimas.php';
  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
