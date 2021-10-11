import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation } from '../models/resa';
import { httpOptions } from '../variables';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  loadResas(search?: String): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(environment.apiUrl + "resa/?search=" + search, httpOptions);
  }

  addResa(resa: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(environment.apiUrl + "resa", resa, httpOptions);
  }

  editResa(resa: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(environment.apiUrl + "resa/" + resa.id, resa, httpOptions);
  }

  deleteResa(id?: number): Observable<any> {
    return this.http.delete<Reservation>(environment.apiUrl + "resa/" + id, httpOptions);
  }

  getResa(id?: number): Observable<Reservation> {
    return this.http.get<Reservation>(environment.apiUrl + "resa/" + id, httpOptions);
  }

}
